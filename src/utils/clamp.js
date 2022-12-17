const DesktopSize = 1440 / 100;
const MobileSize = 375 / 100;

export const Clamp = (web, mobile) => {
  const b = ((web - mobile) / (DesktopSize - MobileSize)).toFixed(3);
  const a = ((web - DesktopSize * b) / 16).toFixed(3);
  return `clamp(${mobile / 16}rem, ${a}rem + ${b}vw, ${web / 16}rem)`;
};
