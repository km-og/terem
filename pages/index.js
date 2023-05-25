import { blockBtnHide, blockBtnSwap } from "../utils/constants.js";
import {
  handlePositionChanges,
  handleVisibilityChanges,
} from "../utils/utils.js";

alert("Привет, мир");

// слушатель изменения видимости блока
blockBtnHide.addEventListener("click", handleVisibilityChanges);

// слушатель изменения положения блоков
blockBtnSwap.addEventListener("click", handlePositionChanges);
