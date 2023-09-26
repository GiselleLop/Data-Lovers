import { renderEpisode } from './view.js';

const data = JSON.parse(localStorage.getItem("item"))
renderEpisode(data);
