import { blockTitle, leftBlock, midBlock } from "../utils/constants.js";

// изменение видимости блока
function handleVisibilityChanges() {
  blockTitle.classList.toggle("block_type_hidden");
}

let isSwap = false;

// поменять блоки местами
function handlePositionChanges() {
  if (!isSwap) {
    midBlock.classList.add("swap__left");
    leftBlock.classList.add("swap__right");
    midBlock.classList.remove("swap__left-type-back");
    leftBlock.classList.remove("swap__right-type-back");
    isSwap = true;
  } else {
    midBlock.classList.add("swap__left-type-back");
    leftBlock.classList.add("swap__right-type-back");
    midBlock.classList.remove("swap__left");
    leftBlock.classList.remove("swap__right");
    isSwap = false;
  }
}

export { handleVisibilityChanges, handlePositionChanges };
