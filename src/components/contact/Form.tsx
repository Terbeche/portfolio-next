"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message, please wait...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      toast.success(
        "Thank you! I have received your message and will get back to you soon.",
        { id: toastId }
      );
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "There was an error sending your message. Please try again later.";
      toast.error(message, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.div variants={item} className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            disabled={isSubmitting}
            {...register("name", {
              required: "This field is required!",
              minLength: {
                value: 2,
                message: "Name should be at least 2 characters long.",
              },
            })}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50"
          />
          {errors.name && (
            <span className="inline-block mt-1 text-xs text-accent">
              {errors.name.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="w-full">
          <input
            type="email"
            placeholder="Your Email"
            disabled={isSubmitting}
            {...register("email", {
              required: "This field is required!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50"
          />
          {errors.email && (
            <span className="inline-block mt-1 text-xs text-accent">
              {errors.email.message}
            </span>
          )}
        </motion.div>

        <motion.div variants={item} className="w-full">
          <textarea
            placeholder="Your Message..."
            rows={5}
            disabled={isSubmitting}
            {...register("message", {
              required: "This field is required!",
              maxLength: {
                value: 2000,
                message: "Message should be less than 2000 characters",
              },
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
            className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg disabled:opacity-50"
          />
          {errors.message && (
            <span className="inline-block mt-1 text-xs text-accent">
              {errors.message.message}
            </span>
          )}
        </motion.div>

        <motion.button
          variants={item}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-md shadow-lg bg-background border border-accent/40 border-solid
            hover:shadow-glass-sm backdrop-blur-sm text-foreground hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending message..." : "Send Message"}
        </motion.button>
      </motion.form>
    </>
  );
}