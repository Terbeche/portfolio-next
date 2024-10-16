/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 scepter.glb 
*/

"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import * as THREE from "three";

type GLTFResult = {
  nodes: {
    mesh_0: Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

const Scepter = React.memo(function Scepter(props: JSX.IntrinsicElements['group']) {
    const { nodes } = useGLTF("/models/scepter.glb") as unknown as GLTFResult;
    const modelRef = useRef<Group>(null);
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }
    });

  return (
    <group
      {...props}
      dispose={null}
      scale={2}
      ref={modelRef}
      position={[1, 1, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
});

export default Scepter;
useGLTF.preload("/models/scepter.glb");
