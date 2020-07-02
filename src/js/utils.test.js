import { convertDateToRoman, convertToString, padBeginning, convertToRoman } from "./utils";
import { converterInput } from "./elements";

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

describe("convertToRoman", () => {
  test("should be defined", () => {
    expect(convertToRoman).toBeDefined();
  });
  test("should accept only one argument.", () => {
    expect(convertToRoman(12, 2020)).toBe(undefined);
  });
  test("should return a string", () => {
    expect(convertToRoman(12)).toStrictEqual("XII");
  });
  test("convertToRoman(2) should return 'II'.", () => {
    expect(convertToRoman(2)).toStrictEqual("II");
  });
  test("convertToRoman(3) should return 'III'.", () => {
    expect(convertToRoman(3)).toStrictEqual("III");
  });
  test("convertToRoman(4) should return 'IV'.", () => {
    expect(convertToRoman(4)).toStrictEqual("IV");
  });
  test("convertToRoman(5) should return 'V'.", () => {
    expect(convertToRoman(5)).toStrictEqual("V");
  });
  test("convertToRoman(9) should return 'IX'.", () => {
    expect(convertToRoman(9)).toStrictEqual("IX");
  });
  test("convertToRoman(12) should return 'XII'.", () => {
    expect(convertToRoman(12)).toStrictEqual("XII");
  });
  test("convertToRoman(16) should return 'XVI'.", () => {
    expect(convertToRoman(16)).toStrictEqual("XVI");
  });
  test("convertToRoman(19) should return 'XIX'.", () => {
    expect(convertToRoman(19)).toStrictEqual("XIX");
  });
  test("convertToRoman(29) should return 'XXIX'.", () => {
    expect(convertToRoman(29)).toStrictEqual("XXIX");
  });
  test("convertToRoman(44) should return 'XLIV'.", () => {
    expect(convertToRoman(44)).toStrictEqual("XLIV");
  });
  test("convertToRoman(45) should return 'XLV'.", () => {
    expect(convertToRoman(45)).toStrictEqual("XLV");
  });
  test("convertToRoman(68) should return 'LXVIII'.", () => {
    expect(convertToRoman(68)).toStrictEqual("LXVIII");
  });
  test("convertToRoman(97) should return 'XCVII'.", () => {
    expect(convertToRoman(97)).toStrictEqual("XCVII");
  });
  test("convertToRoman(100) should return 'C'.", () => {
    expect(convertToRoman(100)).toStrictEqual("C");
  });
  test("convertToRoman(400) should return 'CD'.", () => {
    expect(convertToRoman(400)).toStrictEqual("CD");
  });
  test("convertToRoman(500) should return 'D'.", () => {
    expect(convertToRoman(500)).toStrictEqual("D");
  });
  test("convertToRoman(501) should return 'DI'.", () => {
    expect(convertToRoman(501)).toStrictEqual("DI");
  });
  test("convertToRoman(649) should return 'DCXLIX'.", () => {
    expect(convertToRoman(649)).toStrictEqual("DCXLIX");
  });
  test("convertToRoman(739) should return 'DCCXXXIX'.", () => {
    expect(convertToRoman(739)).toStrictEqual("DCCXXXIX");
  });
  test("convertToRoman(1000) should return 'M'.", () => {
    expect(convertToRoman(1000)).toStrictEqual("M");
  });
  test("convertToRoman(1003) should return 'MIII'.", () => {
    expect(convertToRoman(1003)).toStrictEqual("MIII");
  });
  test("convertToRoman(1100) should return 'MC'.", () => {
    expect(convertToRoman(1100)).toStrictEqual("MC");
  });
  test("convertToRoman(1336) should return 'MCCCXXXVI'.", () => {
    expect(convertToRoman(1336)).toStrictEqual("MCCCXXXVI");
  });
  test("convertToRoman(2020) should return 'MMXX'.", () => {
    expect(convertToRoman(2020)).toStrictEqual("MMXX");
  });
  test("convertToRoman(4040) should return 'MMMMXL'.", () => {
    expect(convertToRoman(4040)).toStrictEqual("MMMMXL");
  });
});
