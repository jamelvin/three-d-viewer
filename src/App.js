import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/PING_G430_MAX_DRIVER.GLB");
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <Canvas drp={[1, 2]} camera={{ fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#fff"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
      >
        <Stage environment={"studio"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;
