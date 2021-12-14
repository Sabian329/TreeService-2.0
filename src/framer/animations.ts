export const VariantsNavigation = {
  close: {
    x: 300,
    opacity: 1,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
export const VariantsBlur = {
  close: {
    opacity: 1,
    display: "none",
  },
  open: {
    display: "block",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const VariantsSlider = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      duration: 2,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      duration: 2,
    };
  },
};
