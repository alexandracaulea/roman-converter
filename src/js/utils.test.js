import { convertDateToRoman, convertToString, padBeginning } from "./utils";

describe("convertDateToRoman", () => {
  test("convertDateToRoman should be defined.", () => {
    expect(convertDateToRoman).toBeDefined();
  });

  test("convertDateToRoman should return a string.", () => {
    expect(convertDateToRoman([30, 6, 2020], ".")).toBe("XXX.VI.MMXX");
  });

  test("convertDateToRoman accepts two arguments.", () => {
    expect(convertDateToRoman([30, 6, 2020])).toBe(undefined);
  });

  test("the first argument passed to convertDateToRoman should be an array.", () => {
    expect(convertDateToRoman("1", ".")).toBe(undefined);
    expect(convertDateToRoman({ date: 10 }, ".")).toBe(undefined);
    expect(convertDateToRoman(1, "")).toBe(undefined);
  });

  test("the second argument passed to convertDateToRoman should be a delimiter.", () => {
    expect(convertDateToRoman([30, 6, 2020], "-")).toBe("XXX-VI-MMXX");
  });

  test("convertDateToRoman([30, 6, 2020], '.') should return XXX.VI.MMXX", () => {
    expect(convertDateToRoman([30, 6, 2020], ".")).toStrictEqual("XXX.VI.MMXX");
  });
});

describe("convertToString", () => {
  test("convertToString should be defined.", () => {
    expect(convertToString).toBeDefined();
  });

  test("convertToString should accept only one argument.", () => {
    expect(convertToString(6, 2020)).toBe(undefined);
  });

  test("convertToString should return a string.", () => {
    expect(convertToString(2020)).toStrictEqual("2020");
  });

  test("convertToString(30) should return '30'.", () => {
    expect(convertToString(30)).toStrictEqual("30");
  });
});

describe("padBeginning", () => {
  test("padBeginning should be defined.", () => {
    expect(padBeginning).toBeDefined();
  });

  test("padBeginning should accept only one argument.", () => {
    expect(padBeginning(10, 2020)).toBe(undefined);
  });

  test("padBeginning should return a string.", () => {
    expect(padBeginning(20)).toStrictEqual("20");
  });

  test("padBeginning padds with zero only the numbers that are less than 10.", () => {
    for (let i = 1; i < 10; i++) {
      expect(padBeginning(i)).toStrictEqual(`0${i}`);
    }
  });

  test("padBeginning should not padd with zero the numbers that are grater than 10.", () => {
    for (let i = 10; i <= 31; i++) {
      expect(padBeginning(i)).toStrictEqual(`${i}`);
    }
  });

  test("padBeginning(2) should return '02'.", () => {
    expect(padBeginning(2)).toStrictEqual("02");
  });

  test("padBeginning(10) should return '10'.", () => {
    expect(padBeginning(10)).toStrictEqual("10");
  });
});
