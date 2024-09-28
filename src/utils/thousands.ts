export const thousands = (num: number) => {
  const str = num.toString();
  return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
};
