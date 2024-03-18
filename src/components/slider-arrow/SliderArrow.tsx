import React, { FC } from "react";
import styles from "./SliderArrow.module.css";
import getPreviousIndex from "../../utils/getPreviousIndex";
import { ISliderArrowProps } from "../../utils/types";
import getNextIndex from "../../utils/getNextIndex";

const SliderArrow: FC<ISliderArrowProps> = (props) => {
  const { side, setImageIndex, imageIndex, galleryImages } = props;
  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (side === "left") {
      setImageIndex(getPreviousIndex(imageIndex, galleryImages));
    } else {
      setImageIndex(getNextIndex(imageIndex, galleryImages));
    }
    event.stopPropagation();
  };

  return (
    <div
      className={`${styles.arrow} ${side === "left" ? styles.arrowLeft : styles.arrowRight}`}
      onClick={(event) => {
        handleClick(event);
      }}
      onKeyDown={(event) => {
        handleClick(event);
      }}
      role="presentation"
    >
      <div className={styles.arrowTopLine} />
      <div className={styles.arrowBottomLine} />
    </div>
  );
};

export default SliderArrow;
