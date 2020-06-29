import { romanNumbers, decimalNumbers } from "./numbers";
import { currentDateNumeral, currentDateRoman, converterInput, resultConversion } from "./elements";

export const convertDateToRoman = (currentDate, delimiter) => {
  let stringDate = "";

  for (let i = 0; i < currentDate.length; i++) {
    for (let j = 0; j < decimalNumbers.length; j++) {
      while (decimalNumbers[j] <= currentDate[i]) {
        stringDate += romanNumbers[j];
        currentDate[i] -= decimalNumbers[j];
      }
    }
    stringDate = stringDate.concat(delimiter);
  }
  const result = stringDate.substring(0, stringDate.length - 1);
  return result;
};

export const convertToString = (date) => {
  return String(date);
};

export const padBeginning = (date) => {
  const stringDate = convertToString(date);
  if (stringDate < 10) {
    return stringDate.padStart(2, 0);
  }
  return stringDate;
};

export const convertToRoman = (input) => {
  let stringDate = "";

  for (let i = 0; i < decimalNumbers.length; i++) {
    while (decimalNumbers[i] <= input) {
      stringDate += romanNumbers[i];
      input -= decimalNumbers[i];
    }
  }
  return stringDate;
};

export const displayCurrentDate = () => {
  const date = new Date();
  const currentDay = padBeginning(date.getDate());
  const currentMonth = padBeginning(date.getMonth() + 1);
  const currentYear = convertToString(date.getFullYear());
  const dateToDisplay = `${currentDay}.${currentMonth}.${currentYear}`;
  currentDateNumeral.textContent = dateToDisplay;
  currentDateNumeral.setAttribute("datetime", `${currentYear}-${currentMonth}-${currentDay}`);
  currentDateRoman.textContent = convertDateToRoman([currentDay, currentMonth, currentYear], ".");
  converterInput.value = currentDay;
  resultConversion.textContent = convertToRoman(currentDay);
};
