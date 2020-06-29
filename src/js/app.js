import { converterInput, closeButton } from "./elements";
import { displayCurrentDate } from "./utils";
import { handleUserTyping, handleCloseButton } from "./handlers";

function init() {
  window.addEventListener("DOMContentLoaded", displayCurrentDate());
  converterInput.addEventListener("input", handleUserTyping);
  closeButton.addEventListener("click", handleCloseButton);
}

init();
