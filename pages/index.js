const block = document.querySelector(".block");
const blockTitle = block.querySelector(".block__with-title");
const blockBtnHide = block.querySelector(".btn-warning");
const midBlock = block.querySelector(".middle__block");
const blockBtnSwap = block.querySelector(".btn-success");

alert("Привет, мир");

// изменение видимости блока
function handleVisibilityChanges() {
  blockTitle.classList.toggle("block_type_hidden");
}

// слушатель изменения видимости блока
blockBtnHide.addEventListener("click", handleVisibilityChanges);

// поменять блоки местами
function handlePositionChanges() {
  midBlock.classList.toggle("block__swap");
}

// слушатель изменения положения блоков
blockBtnSwap.addEventListener("click", handlePositionChanges);
