import axios from 'axios';
import Chart from 'chart.js/auto';
import './assets/css/template.css';
import './assets/css/font-awesome5.css';

// Делаем axios и Chart доступными глобально для совместимости со старым кодом
window.axios = axios;
window.Chart = Chart;

// Импортируем главный файл приложения
import './app/app.js';
