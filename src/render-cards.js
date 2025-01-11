import { renderDetail } from "./render-detail.js";

export const renderItems = (ArrayData) => {
  const containerOfCards = document.createElement('div');
  containerOfCards.classList.add('containerOfCards');
  
  ArrayData.forEach((item) => {
    const totalEpisodes = item.episode.length;
    const cardHTML = `
    <article class="card">
      <div class="data-card">
        <img src="${item.image}" alt="Character Image">
        <p class="idCharacter">${item.id}</p>
      </div>
      <div class="infoContainer">
        <h2 class="nameAndEpisodeCharacterText">Name</h2>
        <h1 class="nameCharacter">${item.name}</h1>
        <h2 class="nameAndEpisodeCharacterText">Episodes: ${totalEpisodes}</h2>
      </div>
      <button class="moreInfoButton">More info</button>
    </article>
  `;

  const card = document.createElement('div');
  card.innerHTML = cardHTML;
  const article = card.firstElementChild;

  article.addEventListener("click", () => {
    renderDetail(item)
  });

  containerOfCards.appendChild(article);
  });
  return containerOfCards; 
};

