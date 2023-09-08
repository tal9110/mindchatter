// Original concept by Tom Bogner @dastom on Dribble: https://dribbble.com/shots/6767548-The-Three-Graces-Concept

import { useEffect, useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useGLTF, SoftShadows, Html, CameraControls } from "@react-three/drei";
import { easing, geometry } from "maath";
import gsap from "gsap";
import { Mesh } from "three";

extend(geometry);

export default function Mindchatter({ modelInView }) {
  const firstGroup = useRef();
  const secondGroup = useRef();

  useEffect(() => {
    // if (modelInView === "first") {
    gsap.to(firstGroup.current?.position, {
      duration: 2,
      x: 0,
      y: 0,
      z: 1,
      ease: "power1.inOut",
    });
    gsap.to(secondGroup.current?.position, {
      duration: 2,
      x: 20,
      y: -5.5,
      z: 1,
      ease: "power1.inOut",
    });
    // } else {
    //   gsap.to(firstGroup.current?.position, {
    //     duration: 2,
    //     x: -20,
    //     y: 0,
    //     z: 1,
    //     ease: "power1.inOut",
    //   });
    //   gsap.to(secondGroup.current?.position, {
    //     duration: 2,
    //     x: 0,
    //     y: -5.5,
    //     z: 1,
    //     ease: "power1.inOut",
    //   });
    // }
  }, [modelInView]);

  return (
    <Canvas
      shadows="basic"
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <fog attach="fog" args={["black", 0, 20]} />
      <ambientLight intensity={3} />
      <pointLight position={[10, -10, -20]} intensity={150} />
      <pointLight position={[-10, -10, -20]} intensity={150} />
      {/* <Model position={[0, -5.5, 3]} rotation={[0, 0, 0]} /> */}
      <group ref={firstGroup}>
        <Model
          inView={modelInView === "first"}
          inView2={modelInView}
          //   position={firstModelPos}
          position={[0, -5.5, 1]}
          rotation={[0, 0, 0]}
        />
      </group>
      <group ref={secondGroup}>
        <Model2
          inView={modelInView === "second"}
          //   position={secondModelPos}
          rotation={[0, 0, 0]}
        />
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
  const { nodes, materials } = useGLTF("/bust.glb");
  const group = useRef();
  const light = useRef();
  const meshRef = useRef();

  useEffect(() => {
    if (props.inView2 === "merch" || props.inView2 === "shows") {
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
    easing.dampE(
      group.current.rotation,
      [0, -state.pointer.x * (Math.PI / 9), 0],
      1.5,
      delta
    );
    easing.damp3(
      group.current.position,
      [0, -5.5, 1 - Math.abs(state.pointer.x)],
      1,
      delta
    );
    // }
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
    // }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={meshRef}
        scale={0.75}
        castShadow
        receiveShadow
        geometry={nodes.bust.geometry}
        material={materials.bust}
        position={[4.681, 1.981, 7.974]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshLambertMaterial color="#404044" />
      </mesh>
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
      {/* <Annotation position={[3.5, 3, -1]}>Shows</Annotation>
      <Annotation position={[-3, 5, 1]}>Merch</Annotation> */}
    </group>
  );
}

function Model2(props) {
  const { nodes, materials } = useGLTF("/merch.glb");
  const group = useRef();
  const light = useRef();
  useFrame((state, delta) => {
    if (props.inView) {
      easing.dampE(
        group.current.rotation,
        [0, -state.pointer.x * (Math.PI / 9), 0],
        1.5,
        delta
      );
      //   easing.damp3(
      //     group.current.position,
      //     [0, -5.5, 1 - Math.abs(state.pointer.x)],
      //     1,
      //     delta
      //   );
    }
    easing.damp3(
      light.current.position,
      [state.pointer.x * 12, 0, 8 + state.pointer.y * 4],
      0.2,
      delta
    );
    // }
  });
  return (
    <group
      scale={2}
      position={[0, 4, 10]}
      ref={group}
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Back_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        {" "}
        <meshLambertMaterial color="#404044" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_Front_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        {" "}
        <meshLambertMaterial color="#404044" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbing_Node.geometry}
        material={materials.Body_FRONT_2664}
      >
        {" "}
        <meshLambertMaterial color="#404044" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ribbing_Node001.geometry}
        material={materials.Body_FRONT_2664}
      >
        {" "}
        <meshLambertMaterial color="#404044" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Node.geometry}
        material={materials.Sleeves_FRONT_2669}
      >
        {" "}
        <meshLambertMaterial color="#404044" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sleeves_Node001.geometry}
        material={materials.Sleeves_FRONT_2669}
      >
        {" "}
        <meshLambertMaterial color="#404044" />
      </mesh>
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

function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
      }
    >
      <div className="annotation">{children}</div>
    </Html>
  );
}
