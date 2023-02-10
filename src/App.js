import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/TITLEIST_SCOTTY_CAMERON_2022_PHANTOM_X_5.5_PUTTER .glb");
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <Canvas drp={[1, 2]} camera={{ fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-Infinity, Infinity]}
        azimuth={[-Infinity, Infinity]}
      >
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;
