export function isValidPassword(password: string): boolean {
  const reg = /^([a-zA-Z0-9-_.]{6,})*$/;
  return reg.test(password);
}

export function isLatinLetters(value: string): boolean {
  const reg = /^[A-Za-z\s]*$/;
  return reg.test(value);
}

export const isBase64Str = (value: string) => {
  // Remove data URI prefix if present
  const base64String = value.split(",")[1] || value;

  // Check if the string is a valid Base64 string
  const reg = /^[A-Za-z0-9+/]+={0,2}$/;

  return reg.test(base64String) && base64String.length % 4 === 0;
};

export const isNumeric = {
  validator: (data: string): boolean => /^[0-9]*$/.test(data),
  message: "please enter the number",
};

export const greaterThanZero = {
  validator: (data: string): boolean => parseFloat(data) > 0,
  message: "please enter number above 0",
};
