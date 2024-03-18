import { TGetIndex } from "./types";

const getPreviousIndex: TGetIndex = (currentIndex, imagesArray) => {
  if (currentIndex > 0) {
    return currentIndex - 1;
  }

  return imagesArray.length - 1;
};

export default getPreviousIndex;
