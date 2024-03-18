import { TGetIndex } from "./types";

const getNextIndex: TGetIndex = (currentIndex, imagesArray) => {
  const firstIndex = 0;

  if (currentIndex < imagesArray.length - 1) {
    return currentIndex + 1;
  }

  return firstIndex;
};

export default getNextIndex;
