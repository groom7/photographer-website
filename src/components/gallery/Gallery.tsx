import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styles from './Gallery.module.css';
import IMG4409 from '../../assets/images/IMG_4409-HDR.webp';
import IMG4438 from '../../assets/images/IMG_4438-HDR.webp';
import IMG4449 from '../../assets/images/IMG_4449-HDR.webp';
import IMG4523 from '../../assets/images/IMG_4523-HDR.webp';
import IMG4598 from '../../assets/images/IMG_4598-HDR.webp';
import IMG4643 from '../../assets/images/IMG_4643-HDR.webp';

const galleryImages = [IMG4409, IMG4438, IMG4449, IMG4523, IMG4598, IMG4643];
const getPreviousIndex = (currentIndex: number, imagesArray: string[]) => {
  if (currentIndex > 0) {
    return currentIndex - 1;
  }

  return imagesArray.length - 1;
};

const getNextIndex = (currentIndex: number, imagesArray: string[]) => {
  const firstIndex = 0;

  if (currentIndex < imagesArray.length - 1) {
    return currentIndex + 1;
  }

  return firstIndex;
};

function Gallery() {
  const [active, setActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

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
        className={`${styles.modal} ${active ? styles.modalActive : ''}`}
        onClick={() => {
          setActive(false);
        }}
        role="presentation"
      >
        <div
          className={`${styles.arrowLeft}`}
          onClick={(event) => {
            setImageIndex(getPreviousIndex(imageIndex, galleryImages));
            event.stopPropagation();
          }}
          onKeyDown={(event) => {
            setImageIndex(getPreviousIndex(imageIndex, galleryImages));
            event.stopPropagation();
          }}
          role="presentation"
        >
          <div className={styles.arrowLeftTop} />
          <div className={styles.arrowLeftBottom} />
        </div>
        <div
          className={`${styles.arrowRight}`}
          onClick={(event) => {
            setImageIndex(getNextIndex(imageIndex, galleryImages));
            event.stopPropagation();
          }}
          onKeyDown={(event) => {
            setImageIndex(getNextIndex(imageIndex, galleryImages));
            event.stopPropagation();
          }}
          role="presentation"
        >
          <div className={styles.arrowRightTop} />
          <div className={styles.arrowRightBottom} />
        </div>
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
}

export default Gallery;
