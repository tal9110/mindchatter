import { useEffect, useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  SoftShadows,
  Html,
  CameraControls,
  Decal,
} from "@react-three/drei";
import { easing, geometry } from "maath";
import gsap from "gsap";
import { Mesh } from "three";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

extend(geometry);

export default function Mindchatter({ modelInView }) {
  const firstGroup = useRef();
  const secondGroup = useRef();

  useEffect(() => {
    console.log(modelInView);
  }, [modelInView]);

  useEffect(() => {
    if (modelInView !== "merch") {
      gsap.to(firstGroup.current?.position, {
        duration: 2,
        x: 0,
        y: 0,
        z: 1,
        ease: "power1.inOut",
      });
      gsap.to(secondGroup.current?.position, {
        duration: 2,
        x: 10,
        y: -5.5,
        z: 1,
        ease: "power1.inOut",
      });
    } else {
      gsap.to(firstGroup.current?.position, {
        duration: 2,
        x: -20,
        y: 0,
        z: 1,
        ease: "power1.inOut",
      });
      gsap.to(secondGroup.current?.position, {
        duration: 2,
        x: 0,
        y: -5.5,
        z: 1,
        ease: "power1.inOut",
      });
    }
  }, [modelInView]);

  return (
    <Canvas
      shadows="basic"
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={["black", 0, 20]} />
      {/* <ambientLight intensity={modelInView === "contact" ? 10 : 4} /> */}
      <ambientLight intensity={4} />

      <pointLight position={[10, -10, -20]} intensity={150} />
      <pointLight position={[-10, -10, -20]} intensity={150} />
      {/* <Model position={[0, -5.5, 3]} rotation={[0, 0, 0]} /> */}

      <group scale={0.75} position={[0, -2.5, 0]}>
        <Eye inView={modelInView} />
      </group>
      <group ref={firstGroup}>
        <Model
          inView={modelInView === "first"}
          inView2={modelInView}
          //   position={firstModelPos}
          //   position={[0, -5.5, 1]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group ref={secondGroup}>
        {/* <group position={[-1.5, 0.65, -3]}>
          <Model2
            num={1}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group>
        <group position={[0, 0.65, -3]}>
          <Model2
            num={2}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group>
        <group position={[1.5, 0.65, -3]}>
          <Model2
            num={3}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group>
        <group position={[-1.5, -1, -3]}>
          <Model2
            num={4}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group>
        <group position={[0, -1, -3]}>
          <Model2
            num={5}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group>
        <group position={[1.5, -1, -3]}>
          <Model2
            num={6}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group> */}
        <group position={[-0.9, 0, -4]}>
          <Model2
            num={6}
            inView={modelInView === "second"}
            rotation={[0, 0, 0]}
          />
        </group>
        <group position={[-0.3, 0, -1]}>
          <Hoodie />
        </group>
        <group position={[0, -2.5, 0]} rotation={[0, 0, 0]}>
          <Vinyl modelInView={modelInView} />
        </group>
      </group>
      <SoftShadows samples={3} />
      <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        enabled={false}
      />
    </Canvas>
  );
}

function Model(props) {
  //   const { nodes, materials } = useGLTF("/bust.glb");
  const { nodes, materials } = useGLTF("/mindchatterBust-transformed.glb");
  const group = useRef();
  const light = useRef();
  const meshRef = useRef();

  useEffect(() => {
    console.log(meshRef.current);
    if (
      props.inView2 === "merch" ||
      props.inView2 === "shows" ||
      props.inView2 === "contact"
    ) {
      gsap.to(meshRef.current?.material, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
      });
    }
    if (props.inView2 === "home") {
      gsap.to(meshRef.current?.material, {
        duration: 1,
        opacity: 1,
        ease: "power1.inOut",
      });
    }
  }, [props.inView2]);
  let accumulatedTime = 0;

  useFrame((state, delta) => {
    if (props.inView2 === "merch" || props.inView2 === "shows") {
      //   meshRef.current.opacity = 0;
      //   gsap.to(meshRef.current?.material, {
      //     duration: 1,
      //     opacity: 0,
      //     ease: "power1.inOut",
      //   });
      //   console.log(meshRef.current.material);
    }
    meshRef.current.material.transparent = true;
    // console.log(group.current);
    // if (props.inView) {
    // easing.dampE(
    //   group.current.rotation,
    //   [0, -state.pointer.x * (Math.PI / 9), 0],
    //   1.5,
    //   delta
    // );
    // easing.damp3(
    //   group.current.position,
    //   [0, 0, 1 - Math.abs(state.pointer.x)],
    //   1,
    //   delta
    // );
    // // }
    // easing.damp3(
    //   light.current.position,
    //   [state.pointer.x * 12, 0, 8 + state.pointer.y * 4 + 1],
    //   0.2,
    //   delta
    // );
    accumulatedTime += delta;

    meshRef.current.rotation.y =
      (Math.PI / 5) * Math.sin(accumulatedTime * 0.3) - Math.PI / 2;
    // }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <mesh
        position={[0.5, -0.4, 0]}
        scale={2.4}
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Default.geometry}
        material={materials.Mat}
        rotation={[0, -Math.PI / 2.5, 0]}
      > */}
      <mesh
        position={[0.5, -0.4, 0]}
        scale={2.4}
        ref={meshRef}
        rotation={[0, -Math.PI / 2.5, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Default.geometry}
        material={materials.Mat}
      >
        {/* <meshLambertMaterial color="#404044" /> */}
        <meshLambertMaterial color="#6a6a6b" />

        <spotLight
          // angle={0.5}
          // penumbra={0.5}
          ref={light}
          castShadow
          intensity={1000}
          // shadow-mapSize={1024}
          // shadow-bias={-0.001}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, -10, 100, 0.1, 60]}
          />
        </spotLight>
      </mesh>
    </group>
  );
}

function Hoodie(props) {
  const { nodes, materials } = useGLTF("/hoodieSmaller-transformed.glb");
  const groupRef = useRef();
  let time = 0;
  useFrame((state, delta) => {
    time += delta;

    groupRef.current.rotation.y =
      (Math.sin(time * 0.3) * Math.PI) / -4 + Math.PI;
    // easing.dampE(
    //   groupRef.current.rotation,
    //   [0, state.pointer.x * (Math.PI / 3) + Math.PI, 0],
    //   0.9,
    //   delta
    // );
    // }
  });
  const texture = useTexture("/hoodie.png");
  return (
    <group
      ref={groupRef}
      scale={0.8}
      rotation={[0, Math.PI, 0]}
      position={[0.9, 6.3, 10]}
      {...props}
      dispose={null}
      onClick={() => {
        window.open(
          "https://mindchattermerch.com/products/mc-live-on-tour-hoodie",
          "_blank"
        );
      }}
    >
      <group position={[0, -0.839, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh.geometry}
          material={materials["Force Fleece_FRONT_134561"]}
        >
          <meshLambertMaterial color="#A89C81" />
          <Decal
            // debug
            position={[0, 1.35, -0.35]}
            rotation={[0, 0, 0]}
            scale={0.5}
            map={texture}
            polygonOffset
            polygonOffsetFactor={2} // The mesh should take precedence over the original

            // map-anisotropy={16}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_1.geometry}
          material={materials["2x2 Rib_FRONT_134483"]}
        >
          <meshLambertMaterial color="#A89C81" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_2.geometry}
          material={materials.Fabric374733_FRONT_76578}
        >
          <meshLambertMaterial color="#A89C81" />
        </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_mesh_3.geometry}
          material={materials["Fabric374733_FRONT_76578.001"]}
        >
          <meshLambertMaterial color="#A89C81" />
        </mesh>
      </group>
    </group>
  );
}

function Model2(props) {
  const { nodes, materials } = useGLTF("/merch-transformed.glb");
  const group = useRef();
  const light = useRef();
  let time = 0;
  useFrame((state, delta) => {
    time += delta;

    group.current.rotation.y = (Math.sin(time * 0.3) * -Math.PI) / -4;
    // easing.dampE(
    //   groupRef.current.rotation,
    //   [0, state.pointer.x * (Math.PI / 3) + Math.PI, 0],
    //   0.9,
    //   delta
    // );
    // }
  });
  //   easing.damp3(
  //     group.current.position,
  //     [0, -5.5, 1 - Math.abs(state.pointer.x)],
  //     1,
  //     delta
  //   );
  // if (props.num % 2 === 0) {
  //   group.current.rotation.y += delta * 0.3;
  // }
  // if (props.num % 2 !== 0) {
  //   group.current.rotation.y -= delta * 0.3;
  // }

  // if (props.inView) {
  // easing.dampE(
  //   group.current.rotation,
  //   [0, -state.pointer.x * (Math.PI / 9), 0],
  //   1.5,
  //   delta
  // );
  // //   easing.damp3(
  // //     group.current.position,
  // //     [0, -5.5, 1 - Math.abs(state.pointer.x)],
  // //     1,
  // //     delta
  // //   );
  // }

  //     easing.damp3(
  //       light.current.position,
  //       [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
  //       0.2,
  //       delta
  //     );
  //     // }
  //   });

  const texture = useTexture("/tee.png");

  return (
    <group
      scale={2}
      position={[0, 4, 10]}
      ref={group}
      {...props}
      dispose={null}
      onClick={() => {
        window.open(
          "https://mindchattermerch.com/products/island-tee",
          "_blank"
        );
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        <meshLambertMaterial color="#cfcfcf" />
        <Decal
          // debug
          position={[0, 1.42, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.2}
          map={texture}
          // map-anisotropy={16}
        />
      </mesh>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        <meshLambertMaterial color="#cfcfcf" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Front_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        <meshLambertMaterial color="#cfcfcf" />

        <Decal
          // debug
          position={[0, 1.42, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.2}
          map={texture}
          // map-anisotropy={16}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbing_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        <meshLambertMaterial color="#cfcfcf" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbing_Node001.geometry}
        material={materials.Body_FRONT_2664}
      >
        <meshLambertMaterial color="#cfcfcf" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Node.geometry}
        material={materials.Sleeves_FRONT_2669}
      >
        <meshLambertMaterial color="#cfcfcf" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Node001.geometry}
        material={materials.Sleeves_FRONT_2669}
      >
        <meshLambertMaterial color="#cfcfcf" />
      </mesh> */}
      <spotLight
        // angle={0.5}
        // penumbra={0.5}
        ref={light}
        castShadow
        intensity={1000}
        // shadow-mapSize={1024}
        // shadow-bias={-0.001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </spotLight>
    </group>
  );
}

function Eye(props) {
  const { nodes, materials } = useGLTF("/eyeTest.glb");

  const eyeRef1 = useRef();
  const eyeRef2 = useRef();
  const totalRef = useRef();

  useEffect(() => {
    if (props.inView !== "contact") {
      gsap.to(totalRef.current.position, {
        duration: 1,
        x: 0,
        y: -5,
        z: 0,
        ease: "power1.inOut",
      });
    }
    if (props.inView === "contact") {
      gsap.to(totalRef.current.position, {
        duration: 1,
        x: -0.75,
        y: 1,
        z: 2,
        ease: "power1.inOut",
      });
    }
    if (props.inView !== "contact") {
      gsap.to(totalRef.current.scale, {
        duration: 1,
        x: 0,
        y: 0,
        z: 0,
        ease: "power1.inOut",
      });
    }
    if (props.inView === "contact") {
      gsap.to(totalRef.current.scale, {
        duration: 1,
        x: 0.5,
        y: 0.5,
        z: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [props.inView]);

  //   useFrame((state, delta) => {
  //     if (props.inView === "contact") {
  //       const targetRotationX = -state.pointer.y * (Math.PI / 6); // up to 30 degrees vertical rotation
  //       const targetRotationZ = state.pointer.x * (Math.PI / 6); // up to 30 degrees horizontal rotation

  //       easing.dampE(
  //         eyeRef1.current.rotation,
  //         [targetRotationX, 0, targetRotationZ],
  //         0.1,
  //         delta
  //       );
  //       easing.dampE(
  //         eyeRef2.current.rotation,
  //         [targetRotationX, 0, targetRotationZ],
  //         0.1,
  //         delta
  //       );
  //     }
  //   });
  return (
    // <group
    //   {...props}
    //   dispose={null}
    //   scale={0}
    //   rotation-y={Math.PI / 2}
    //   ref={totalRef}
    //   position={[-0.75, 1, 2]}
    // >
    //   <group>
    //     <group
    //       position={[-1.016, 0.362, 2.767]}
    //       rotation={[-1.231, 0.165, -1.708]}
    //       scale={4}
    //     >
    //       <group ref={eyeRef1}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Sclera.geometry}
    //           material={materials.Eye}
    //           position={[0, -0.102, 0]}
    //         />
    //       </group>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Shell.geometry}
    //         material={materials["Eye 2"]}
    //         position={[0, 0, -0.36]}
    //       />
    //     </group>
    //     <group
    //       position={[-1.016, 0.362, -0.072]}
    //       rotation={[-1.231, 0.165, -1.708]}
    //       scale={4}
    //     >
    //       <group ref={eyeRef2}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Sclera_1.geometry}
    //           material={materials.Eye}
    //           position={[0, -0.102, 0]}
    //         />
    //       </group>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Shell_1.geometry}
    //         material={materials["Eye 2"]}
    //         position={[0, 0, -0.36]}
    //       />
    //     </group>
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.ztl_fist_v2.geometry}
    //     material={materials.Hand}
    //     position={[0, -15.597, 2.722]}
    //     rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
    //     scale={20}
    //   />
    // </group>
    <group
      {...props}
      dispose={null}
      scale={0}
      rotation-y={Math.PI / 2}
      ref={totalRef}
      position={[-0.75, 1, 2]}
    >
      <group
        position={[-1.016, 0.362, 2.767]}
        rotation={[-1.231, 0.165, -1.708]}
        scale={4}
      >
        <group ref={eyeRef1} rotation={[-Math.PI / 4, 0, -Math.PI / 12]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sclera.geometry}
            material={materials.Eye}
            position={[0, -0.102, 0]}
          />
        </group>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shell.geometry}
          material={materials["Eye 2"]}
          position={[0, 0, -0.36]}
        />
      </group>
      <group
        position={[-1.016, 0.362, -0.072]}
        rotation={[-1.231, 0.165, -1.708]}
        scale={4}
      >
        <group ref={eyeRef2} rotation={[-Math.PI / 4, 0, -Math.PI / 12]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sclera001.geometry}
            material={materials.Eye}
            position={[0, -0.102, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shell001.geometry}
          material={materials["Eye 2"]}
          position={[0, 0, -0.36]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ztl_fist_v2.geometry}
        material={materials.Hand}
        position={[0, -15.597, 2.722]}
        rotation={[-Math.PI / 2, -0.175, -Math.PI / 2]}
        scale={20}
      />
    </group>
  );
}

function Vinyl(props) {
  const { nodes, materials } = useGLTF("/vinyl2.glb");
  const diskRef = useRef();

  useFrame((state, delta) => {
    if (props.modelInView === "merch") {
      diskRef.current.rotation.x += delta / 2.5;
      diskRef.current.scale.x = 1;
      diskRef.current.scale.y = 1;
      diskRef.current.scale.z = 1;
    } else {
      diskRef.current.scale.x = 0;
      diskRef.current.scale.y = 0;
      diskRef.current.scale.z = 0;
    }
  });

  const texture2 = useTexture("/dream.png");
  return (
    <group
      scale={0.9}
      // rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      position={[1.1, 6, 2]}
      {...props}
      dispose={null}
      onClick={() => {
        window.open(
          "https://mindchattermerch.com/products/dream-soup-vinyl",
          "_blank"
        );
      }}
    >
      <mesh
        ref={diskRef}
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.005"]}
        position={[0, -0.032, 0.95]}
        // rotation-y={-Math.PI / 2}
        rotation={[Math.PI, -Math.PI / 2, 0]}
      >
        <meshBasicMaterial attach="material" map={texture2} />
      </mesh>
    </group>
  );
}
