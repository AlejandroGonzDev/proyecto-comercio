import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7eNqkwa5zHmC0WC4Uo8bu0_GuhLt8DVg',
  authDomain: 'proyecto-ecommerce-4fc8c.firebaseapp.com',
  projectId: 'proyecto-ecommerce-4fc8c',
  storageBucket: 'proyecto-ecommerce-4fc8c.appspot.com',
  messagingSenderId: '1004650216916',
  appId: '1:1004650216916:web:e8dae9e34e4094b947aa41',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

// Exportar db y otros servicios de Firebase si es necesario
export { db };