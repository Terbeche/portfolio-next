import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Basic validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "termus96@gmail.com";

    // 2. If RESEND_API_KEY is not configured, simulate message receipt for dev/preview
    if (!apiKey || apiKey.trim() === "") {
      console.warn(
        "[Contact API] RESEND_API_KEY is not configured in .env.local. Message logged to console:\n",
        { name, email, message }
      );
      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message:
            "Your message was received! (Note: RESEND_API_KEY not yet set on server).",
        },
        { status: 200 }
      );
    }

    // 3. Send email via Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `[Portfolio Inquiry] Message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #1b1b1b; color: #e1e1e1; border-radius: 12px; border: 1px solid #333;">
          <div style="border-bottom: 1px solid rgba(254, 254, 91, 0.2); padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #fefe5b; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
            <p style="margin: 4px 0 0 0; color: #888; font-size: 13px;">Received via mostefaterbeche.me contact form</p>
          </div>
          
          <table style="width: 100%; margin-bottom: 24px; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 80px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email.trim()}" style="color: #fefe5b; text-decoration: none;">${email.trim()}</a></td>
            </tr>
          </table>

          <div style="background-color: #242424; padding: 18px; border-radius: 8px; border-left: 3px solid #fefe5b;">
            <h4 style="margin: 0 0 10px 0; color: #aaa; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h4>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 15px; color: #f0f0f0;">${message.trim()}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #333; font-size: 12px; color: #666; text-align: center;">
            Sent to ${receiverEmail} · Click reply to respond directly to ${email.trim()}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact API] Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via provider." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected server error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
