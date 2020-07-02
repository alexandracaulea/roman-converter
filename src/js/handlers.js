import { converterInput, resultConversion, equalSign, closeButton } from "./elements";
import { convertToRoman } from "./utils";

export const handleCloseButton = () => {
  converterInput.value = "";
  closeButton.setAttribute("hidden", true);
  equalSign.setAttribute("hidden", true);
  resultConversion.textContent = "";
};

export const handleUserTyping = (e) => {
  let { value } = e.target;

  if (value === "") {
    equalSign.setAttribute("hidden", true);
    resultConversion.setAttribute("hidden", true);
    closeButton.setAttribute("hidden", true);
    return;
  } else if (/[^0-9]/g.test(value) || e.currentTarget.value.search(/^0/) != -1) {
    value = value.replace(/^0|[^0-9]/g, "");
    converterInput.value = value;
    resultConversion.innerHTML = convertToRoman(value);
    return;
  }
  closeButton.setAttribute("hidden", false);
  equalSign.setAttribute("hidden", false);
  resultConversion.setAttribute("hidden", false);
  resultConversion.innerHTML = convertToRoman(value);
};
