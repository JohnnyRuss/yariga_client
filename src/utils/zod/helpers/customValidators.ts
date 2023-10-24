export function isValidPassword(password: string): boolean {
  const reg = /^([a-zA-Z0-9-_.]{6,})*$/;
  return reg.test(password);
}

export function isLatinLetters(value: string): boolean {
  const reg = /^[A-Za-z\s]*$/;
  return reg.test(value);
}

export const isNumeric = {
  validator: (data: string): boolean => /^[0-9]*$/.test(data),
  message: "please enter the number",
};

export const greaterThanZero = {
  validator: (data: string): boolean => parseFloat(data) > 0,
  message: "please enter number above 0",
};
