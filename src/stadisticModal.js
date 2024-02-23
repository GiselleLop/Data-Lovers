export function createModal() {
  const modalSection = document.createElement("section");
  modalSection.classList.add("modal");

  const modalContent = `
      <div class="header_modal">
        <h2 class=titleModal>Statistical data</h2>
        <button class="modal_close">Close Modal</button>
      </div>
      <div class="charts_container">
        <div class="charts">
          <p class="titleChar">In this graph we can see the number of characters divided by gender.</p>
          <canvas id="graficGender" style="display: flex"></canvas>
        </div>
        <div class="charts">
          <p class="titleChar">In this graph we can see the number of characters divided by life status.</p>
          <canvas id="graficStatus" style="display: flex"></canvas>
        </div>
        <div class="charts">
          <p class="titleChar">In this graph we can see the number of characters divided by species</p>
          <canvas id="graficSpecies" style="display: flex"></canvas>
        </div>
      </div>
    `;

  modalSection.innerHTML = modalContent;
  const modalCloseButton = modalSection.querySelector('.modal_close');
  modalCloseButton.addEventListener('click', function() {
    modalSection.remove();
  });
 
  return modalSection;
}
