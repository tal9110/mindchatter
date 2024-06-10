/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 hoodieSmaller.glb --transform 
Files: hoodieSmaller.glb [15.91MB] > hoodieSmaller-transformed.glb [3.92MB] (75%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/hoodieSmaller-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.839, 0]}>
        <mesh
          geometry={nodes.Cloth_mesh.geometry}
          material={materials["Force Fleece_FRONT_134561"]}
        />
        <mesh
          geometry={nodes.Cloth_mesh_1.geometry}
          material={materials["2x2 Rib_FRONT_134483"]}
        />
        <mesh
          geometry={nodes.Cloth_mesh_2.geometry}
          material={materials.Fabric374733_FRONT_76578}
        />
        <mesh
          geometry={nodes.Cloth_mesh_3.geometry}
          material={materials["Fabric374733_FRONT_76578.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hoodieSmaller-transformed.glb");
