import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
import * as THREE from '../../node_modules/three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Canvas, useFrame } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import {GLTFLoader} from './../../node_modules/three/examples/jsm/loaders/GLTFLoader'

const Model: React.FC = () => { // Функциональный компонент Model
    const ref = useRef<HTMLDivElement>(null); // Ссылка на DOM-элемент, который будет содержать 3D-сцену
    const [isLoading, setIsLoading] = useState(true); // Состояние для отслеживания загрузки модели
    const Model: React.FC = () => { // Функциональный компонент Model
  

        useEffect(() => { // Хук useEffect, который запускается при монтировании компонента
          const canvas = document.createElement('canvas'); // Создание холста для рендеринга
          const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); // Создание рендерера
          const scene = new THREE.Scene(); // Создание сцены
          const camera = new THREE.PerspectiveCamera(
            75, // Поле зрения камеры
            window.innerWidth / window.innerHeight, // Соотношение сторон камеры
            0.1, // Ближняя плоскость отсечения
            1000 // Дальняя плоскость отсечения
          );
      
          const loader = new THREE.GLTFLoader(); // Создание загрузчика моделей GLTF
          loader.load(
            '../app/dog.glb', // Путь к файлу модели (замените на свой файл)
            (gltf) => { // Обработчик события после успешной загрузки модели
              const model = gltf.scene; // Получение объекта сцены из загруженной модели
              scene.add(model); // Добавление модели в сцену
      
              const orbitControls = new OrbitControls(camera, renderer.domElement); // Создание OrbitControls для управления камерой
              orbitControls.enableDamping = true; // Включение демпфирования
              orbitControls.dampingFactor = 0.25; // Коэффициент демпфирования
      
              // Функция для анимации рендеринга
              const animate = () => {
                requestAnimationFrame(animate); // Запрос кадра анимации
                orbitControls.update(); // Обновление OrbitControls
                renderer.render(scene, camera); // Рендеринг сцены
              };
      
              animate(); // Запуск анимации
              setIsLoading(false); // Установка флага загрузки в false
            },
            (progress) => { // Обработчик прогресса загрузки
              console.log('Loading model:', progress.loaded / progress.total); // Вывод в консоль прогресса загрузки
            },
            (error) => { // Обработчик ошибок при загрузке
              console.error('Error loading model:', error); // Вывод ошибки в консоль
            }
          );
      
          // Функция для изменения размера рендерера при изменении размера окна
          const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight; // Обновление соотношения сторон камеры
            camera.updateProjectionMatrix(); // Обновление проекционной матрицы
            renderer.setSize(window.innerWidth, window.innerHeight); // Изменение размера рендерера
          };
      
          window.addEventListener('resize', onWindowResize); // Добавление слушателя события resize
      
          const container = ref.current; // Получение ссылки на контейнер модели
          if (container) {
            container.appendChild(renderer.domElement); // Добавление рендерера в контейнер
          }
    // Функция, которая выполняется при размонтировании компонента
    return () => {
        window.removeEventListener('resize', onWindowResize); // Удаление слушателя события resize
        if (container) {
          container.removeChild(renderer.domElement); // Удаление рендерера из контейнера
        }
      };
    }, []); // Зависимости хука useEffect: пустой массив, чтобы хук запускался только один раз при монтировании
  
    return (
        // Контейнер для модели
        <div ref={ref} className="w-full h-64 bg-gray-300"> 
          {isLoading && (
            <div className="flex items-center justify-center h-full">
                 {/* Отображение сообщения "Loading..." пока модель загружается */}
              <p>Loading...</p> 
            </div>
          )}
        </div>
      );
    };
    
    export default Model; // Экспорт компонента Model









  
