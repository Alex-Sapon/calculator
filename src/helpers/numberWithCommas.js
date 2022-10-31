export const numberWithCommas = string => {
  if (string) {
    return string.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  }
  return '';
}
