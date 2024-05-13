export function colorWithTrans(hex: string, trans: string): string {
  const baseColor = hex;
  const transPercent = parseInt(trans);
  const transNum = Math.round((255 * transPercent) / 100);
  const transHexCode =
    transNum.toString(16).length < 2
      ? `0${transNum.toString(16)}`
      : transNum.toString(16);
  return `${baseColor}${transHexCode}`;
}
