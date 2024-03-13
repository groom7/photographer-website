import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import CloseButton from 'react-bootstrap/CloseButton';
import styles from './Gallery.module.css';
import IMG4409 from '../../assets/images/IMG_4409-HDR.webp';
import IMG4438 from '../../assets/images/IMG_4438-HDR.webp';
import IMG4449 from '../../assets/images/IMG_4449-HDR.webp';
import IMG4523 from '../../assets/images/IMG_4523-HDR.webp';
import IMG4598 from '../../assets/images/IMG_4598-HDR.webp';
import IMG4643 from '../../assets/images/IMG_4643-HDR.webp';

const galleryImages = [IMG4409, IMG4438, IMG4449, IMG4523, IMG4598, IMG4643];

function Gallery() {
  const [active, setActive] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 1230: 2, 1650: 3, 2100: 4 }}>
        <Masonry gutter="12px">
          {galleryImages.map((image, index) => (
            <img
              className={styles.image}
              src={image}
              alt="interior"
              onClick={() => {
                setActive(true);
                setImageIndex(index);
              }}
              key={image}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div
        className={`${styles.modal} ${active ? styles.modalActive : ''}`}
        onClick={() => setActive(false)}
        role="menuitem"
        tabIndex={0}
      >
        <CloseButton className={styles.closeButton} />
        <div
          className={styles.modalContent}
          onClick={(event) => event.stopPropagation()}
          role="menuitem"
          tabIndex={0}
        >
          {/* <div className={styles.modalContentWrapper}> */}
          <img
            className={styles.modalImage}
            src={galleryImages[imageIndex]}
            alt="interior"
            onClick={() => {
              if (imageIndex < galleryImages.length - 1) {
                setImageIndex((index) => index + 1);
              } else {
                setImageIndex(0);
              }
            }}
            key={galleryImages[imageIndex]}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
