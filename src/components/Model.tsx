import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
import * as THREE from '../../node_modules/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Canvas, useFrame } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {GLTFLoader} from './../../node_modules/three/examples/jsm/loaders/GLTFLoader'

const Model: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [modelRotation, setModelRotation] = useState(new THREE.Euler(0, 0, 0));
  
    useEffect(() => {
      const canvas = document.createElement('canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
  
      const loader = new THREE.GLTFLoader();
      loader.load(
        '/dog.glb',
        (gltf) => {
          const model = gltf.scene;
          model.rotation.setFromEuler(modelRotation);
          scene.add(model);
  
          const orbitControls = new OrbitControls(camera, renderer.domElement);
          orbitControls.enableDamping = true;
          orbitControls.dampingFactor = 0.25;
  
          const animate = () => {
            requestAnimationFrame(animate);
            orbitControls.update();
            renderer.render(scene, camera);
          };
  
          animate();
          setIsLoading(false);
        },
        (progress) => {
          console.log('Loading model:', progress.loaded / progress.total);
        },
        (error) => {
          console.error('Error loading model:', error);
        }
      );
  
      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener('resize', onWindowResize);
  
      const container = ref.current;
      if (container) {
        container.appendChild(renderer.domElement);
      }
  
      return () => {
        window.removeEventListener('resize', onWindowResize);
        if (container) {
          container.removeChild(renderer.domElement);
        }
      };
    }, []);
  
    return (
      <div ref={ref} className="w-full h-64 bg-gray-300">
        {isLoading && (
          <div className="flex items-center justify-center h-full">
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Model;