export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

export const fadeFromTopPercentage = {
  hidden: {
    top: "0%",

    opacity: 0,
  },
  show: {
    top: "10%",

    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    top: "0%",

    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeFromTopAbsolute = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,

    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const fadeCompletedModal = {
  hidden: {
    top: "0%",

    opacity: 0,
  },
  show: {
    top: "50%",

    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    top: "0%",
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};
