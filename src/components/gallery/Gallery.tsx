import React, { FC, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./Gallery.module.css";
import IMG4409 from "../../assets/images/IMG_4409-HDR.webp";
import IMG4438 from "../../assets/images/IMG_4438-HDR.webp";
import IMG4449 from "../../assets/images/IMG_4449-HDR.webp";
import IMG4523 from "../../assets/images/IMG_4523-HDR.webp";
import IMG4598 from "../../assets/images/IMG_4598-HDR.webp";
import IMG4643 from "../../assets/images/IMG_4643-HDR.webp";
import SliderArrow from "../slider-arrow/SliderArrow";
import getNextIndex from "../../utils/getNextIndex";

const galleryImages = [IMG4409, IMG4438, IMG4449, IMG4523, IMG4598, IMG4643];

const Gallery: FC = () => {
  const [active, setActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (active) {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [active]);

  return (
    <div className={styles.gallery}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1230: 2, 1650: 3, 2100: 4 }}>
        <Masonry gutter="12px">
          {galleryImages.map((image, index) => (
            <input
              className={styles.image}
              src={image}
              onClick={() => {
                setActive(true);
                setImageIndex(index);
              }}
              onKeyDown={() => {
                setActive(true);
                setImageIndex(index);
              }}
              type="image"
              alt="interior"
              key={image}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div
        className={`${styles.modal} ${active ? styles.modalActive : ""}`}
        onClick={() => {
          setActive(false);
        }}
        role="presentation"
      >
        <SliderArrow
          side="left"
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
          galleryImages={galleryImages}
        />
        <SliderArrow
          side="right"
          setImageIndex={setImageIndex}
          imageIndex={imageIndex}
          galleryImages={galleryImages}
        />
        <span
          className={styles.closeButton}
          onClick={() => {
            setActive(false);
          }}
          onKeyDown={() => {
            setActive(false);
          }}
          role="menuitem"
          tabIndex={0}
        >
          &times;
        </span>
        <div className={styles.modalContent} role="menuitem" tabIndex={0}>
          <input
            className={styles.modalImage}
            onClick={(event) => {
              setImageIndex(getNextIndex(imageIndex, galleryImages));
              event.stopPropagation();
            }}
            onKeyDown={(event) => {
              setImageIndex(getNextIndex(imageIndex, galleryImages));
              event.stopPropagation();
            }}
            src={galleryImages[imageIndex]}
            type="image"
            alt="interior"
            key={galleryImages[imageIndex]}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
