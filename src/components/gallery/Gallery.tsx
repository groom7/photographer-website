import React, { FC, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ScrollToTop from "react-scroll-up";
import styles from "./Gallery.module.css";
import getNextIndex from "../../utils/getNextIndex";
import getPreviousIndex from "../../utils/getPreviousIndex";
import Modal from "../modal/Modal";
import { IGalleryProps } from "../../utils/types";

const Gallery: FC<IGalleryProps> = (props) => {
  const { images } = props;
  const [modalActive, setModalActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (modalActive) {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [modalActive]);

  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalActive(false);
      }
    };

    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [setModalActive]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setImageIndex(getPreviousIndex(imageIndex, images));
      } else if (event.key === "ArrowRight") {
        setImageIndex(getNextIndex(imageIndex, images));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageIndex]);

  return (
    <div className={styles.gallery}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1230: 2, 1650: 3, 2100: 4 }}>
        <Masonry gutter="12px">
          {images.map((image, index) => (
            <input
              className={styles.image}
              src={image}
              onClick={() => {
                setModalActive(true);
                setImageIndex(index);
              }}
              type="image"
              alt="interior"
              key={image}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <ScrollToTop showUnder={160}>
        <div className={styles.arrowWrapper}>
          <div className={styles.arrow} />
        </div>
      </ScrollToTop>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        galleryImages={images}
      />
    </div>
  );
};

export default Gallery;
