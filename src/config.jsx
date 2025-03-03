
import { remToPx, getTailwindProperty } from "./Tools/ElementHooks"


// style configs are written in tailwind
const widthBreakpoints = "w-full 2xl:w-7xl"
const sidePadding = "p-2 md:p-6"
const backgroundColor = "bg-gray-50"

  const breakpointSm = remToPx(getTailwindProperty("--breakpoint-sm"));
  const breakpointMd = remToPx(getTailwindProperty("--breakpoint-md"));
  const breakpointLg = remToPx(getTailwindProperty("--breakpoint-lg"));
  const breakpointXl = remToPx(getTailwindProperty("--breakpoint-xl"));
  const breakpoint2xl = remToPx(getTailwindProperty("--breakpoint-2xl"));

const defaultBreakpoints = {
  bsm: breakpointSm,
  bmd: breakpointMd,
  blg: breakpointLg,
  bxl: breakpointXl,
  b2xl: breakpoint2xl,
}

export { widthBreakpoints, sidePadding,backgroundColor, defaultBreakpoints}