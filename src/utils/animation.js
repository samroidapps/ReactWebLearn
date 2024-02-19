export const containerVariants = (delay = 0) => ({
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 2,
      type: "spring",
    },
  },
});

export const tagVariants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

export const titleVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.2,
      type: "spring",
    },
  },
};

export const desVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2.6,
      type: "spring",
      delay: 0.2,
    },
  },
};
