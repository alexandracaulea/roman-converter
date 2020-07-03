import { ROMAN_NUMBERS, DECIMAL_NUMBERS } from "./numbers";
import {
  currentDateNumeral,
  currentDateRoman,
  converterInput,
  resultConversion,
  equalSign,
  closeButton,
} from "./elements";

export function convertDateToRoman(currentDate, delimiter) {
  if (arguments.length !== 2) return;
  if (!Array.isArray(currentDate)) return;

  let stringDate = "";
  for (let i = 0; i < currentDate.length; i++) {
    for (let j = 0; j < DECIMAL_NUMBERS.length; j++) {
      while (DECIMAL_NUMBERS[j] <= currentDate[i]) {
        stringDate += ROMAN_NUMBERS[j];
        currentDate[i] -= DECIMAL_NUMBERS[j];
      }
    }
    stringDate = stringDate.concat(delimiter);
  }
  const result = stringDate.substring(0, stringDate.length - 1);
  return result;
}

export function convertToString(date) {
  if (arguments.length !== 1) return;
  return String(date);
}

export function padBeginning(date) {
  if (arguments.length !== 1) return;

  const stringDate = convertToString(date);
  if (stringDate < 10) {
    return stringDate.padStart(2, 0);
  }
  return stringDate;
}

export function convertToRoman(input) {
  if (arguments.length !== 1) return;

  let stringDate = "";
  for (let i = 0; i < DECIMAL_NUMBERS.length; i++) {
    while (DECIMAL_NUMBERS[i] <= input) {
      stringDate += ROMAN_NUMBERS[i];
      input -= DECIMAL_NUMBERS[i];
    }
  }
  return stringDate;
}

export function showInformation(attribute, value) {
  resultConversion.setAttribute(attribute, value);
  closeButton.setAttribute(attribute, value);
  equalSign.setAttribute(attribute, value);
}

export const displayCurrentDate = () => {
  const currentDate = new Date();
  const currentDay = padBeginning(currentDate.getDate());
  const currentMonth = padBeginning(currentDate.getMonth() + 1);
  const currentYear = convertToString(currentDate.getFullYear());
  const dateToDisplay = `${currentDay}.${currentMonth}.${currentYear}`;
  currentDateNumeral.textContent = dateToDisplay;
  currentDateNumeral.setAttribute("datetime", `${currentYear}-${currentMonth}-${currentDay}`);
  currentDateRoman.textContent = convertDateToRoman([currentDay, currentMonth, currentYear], ".");
  converterInput.value = currentDate.getDate();
  resultConversion.textContent = convertToRoman(currentDay);
};
