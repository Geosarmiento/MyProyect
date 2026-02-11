import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Shirt3D() {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const frameRef = useRef(null);
  const isDragging = useRef(false);
  const prevX = useRef(0);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f5f5f5");

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 3);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(3, 5, 5);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xffffff, 0.6);
    rim.position.set(-3, 3, -4);
    scene.add(rim);

    // Load model
    const loader = new GLTFLoader();
    loader.load("/shirt.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(1.4, 1.4, 1.4);
      model.position.y = -1;
      modelRef.current = model;
      scene.add(model);
    });

    // Render loop
    const loop = () => {
      frameRef.current = requestAnimationFrame(loop);
      renderer.render(scene, camera);
    };
    loop();

    // Drag interaction
    const onPointerDown = (e) => {
      isDragging.current = true;
      prevX.current = e.clientX;
    };

    const onPointerMove = (e) => {
      if (!isDragging.current || !modelRef.current) return;
      const delta = e.clientX - prevX.current;
      modelRef.current.rotation.y += delta * 0.01;
      prevX.current = e.clientX;
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Resize
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "360px",
        height: "480px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        cursor: "grab"
      }}
    />
  );
}
