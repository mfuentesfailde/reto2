
import './styles.css';

import {
    FilesetResolver,
    FaceLandmarker
} from '@mediapipe/tasks-vision';

declare global {
    interface Window {
        MediaPipeVision: {
            FilesetResolver: typeof FilesetResolver;
            FaceLandmarker: typeof FaceLandmarker;
        };
    }
}

window.MediaPipeVision = {
    FilesetResolver,
    FaceLandmarker
};

const script = document.createElement('script');
script.src = '/sketch.js';

script.onload = () => {
    console.log('sketch.js cargado correctamente');
};

script.onerror = () => {
    console.error('No se pudo cargar sketch.js');
};

document.body.appendChild(script);
