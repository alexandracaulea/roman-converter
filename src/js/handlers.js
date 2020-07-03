import { converterInput, resultConversion } from "./elements";
import { convertToRoman, showInformation } from "./utils";

export const handleCloseButton = () => {
  converterInput.value = "";
  resultConversion.textContent = "";
  showInformation("hidden", true);
};

export const handleUserTyping = (e) => {
  let valueTyped = e.target.value;

  if (valueTyped === "") {
    showInformation("hidden", true);
    return;
  } else if (/[^0-9]/g.test(valueTyped) || valueTyped.search(/^0/) != -1) {
    valueTyped = valueTyped.replace(/^0|[^0-9]/g, "");
    converterInput.value = valueTyped;
    resultConversion.innerHTML = convertToRoman(valueTyped);
    return;
  }
  showInformation("hidden", false);
  resultConversion.innerHTML = convertToRoman(valueTyped);
};
