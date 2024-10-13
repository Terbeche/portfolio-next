/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 hat.glb 
*/

"use client";
import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import { Group, Mesh, MeshStandardMaterial } from "three";

interface HatModelProps {
  [key: string]: unknown;
}

interface GLTFResult {
  nodes: {
    mesh_0: Mesh;
  };
  materials: {
    initialShadingGroup: MeshStandardMaterial;
  };
}

const HatModel: React.FC<HatModelProps> = React.memo(function HatModel({ scale = 1.5, ...props }: React.ComponentProps<'group'>) {
  const { nodes, materials } = useGLTF('/models/hat.glb') as GLTFResult;

  const modelRef = useRef<Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    }
  });
  return (
    <group ref={modelRef} {...props} dispose={null} scale={scale}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
    </group>
  )
});

export default HatModel;
useGLTF.preload('/models/hat.glb')