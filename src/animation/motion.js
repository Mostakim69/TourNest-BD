export const leftToRight = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, x: -50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, x: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};

export const rightToLeft = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, x: 50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, x: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};

export const topToBottom = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, y: -50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, y: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};

export const bottomToTop = {
  // Initial state: hidden and slightly moved to the left
  initial: { opacity: 0, y: 50 },
  // Animated state: fully visible and at its original position
  animate: { opacity: 1, y: 0 },
  // Transition properties: duration and easing
  transition: { duration: 0.6, ease: "easeOut" },
};
