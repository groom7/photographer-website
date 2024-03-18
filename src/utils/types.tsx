export interface ISliderArrowProps {
  side: string;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageIndex: number;
  galleryImages: string[];
}

export type TGetIndex = (currentIndex: number, imagesArray: string[]) => number;
