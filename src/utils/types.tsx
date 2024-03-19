export interface ISliderArrowProps {
  side: string;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  galleryImages: string[];
}

export type TGetIndex = (currentIndex: number, imagesArray: string[]) => number;

export interface IModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  galleryImages: string[];
}
