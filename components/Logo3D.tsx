"use client";

import { useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function Model({ scale, position }) {
  const { scene } = useGLTF('/models/duskies_logo.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ color: 'white' });
      }
    });
  }, [scene]);

  useFrame(() => {
    scene.rotation.y += 0.07; 
  });

  return <primitive object={scene} scale={scale} position={position} />;
}

function FitCameraToModel({ adjustPosition }) {
  const { camera, gl: { domElement } } = useThree();
  const { scene } = useGLTF('/models/duskies_logo.glb');

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    camera.near = size / 100;
    camera.far = size * 100;
    camera.updateProjectionMatrix();

    camera.position.copy(center);
    camera.position.x += size / 1.5;
    camera.position.y += size / 3;
    camera.position.z += size / 1.5;
    camera.lookAt(center);

    if (adjustPosition) {
      camera.position.y += 0.5;
    }

    return () => {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).geometry.dispose();
          (child as THREE.Mesh).material.dispose();
        }
      });
    };
  }, [scene, camera, domElement, adjustPosition]);

  return null;
}

export default function Logo3D({ scale = [2, 2, 2], position = [0, -0.5, 0], adjustPosition = true }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Canvas style={{ background: 'none', width: '70vw', height: '70vh' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model scale={scale} position={position} />
        <FitCameraToModel adjustPosition={adjustPosition} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
