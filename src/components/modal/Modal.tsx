import React, { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { IModalProps } from "../../utils/types";
import getNextIndex from "../../utils/getNextIndex";
import SliderArrow from "../slider-arrow/SliderArrow";

const portal = document.getElementById("portal") as HTMLElement;

const Modal: FC<IModalProps> = (props) => {
  const { modalActive, setModalActive, imageIndex, setImageIndex, galleryImages } = props;

  return ReactDOM.createPortal(
    <div
      className={`${styles.modal} ${modalActive ? styles.modalActive : ""}`}
      onClick={() => {
        setModalActive(false);
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
          setModalActive(false);
        }}
        role="presentation"
      >
        &times;
      </span>
      <div className={styles.modalContent} role="presentation">
        <input
          className={styles.modalImage}
          onClick={(event) => {
            setImageIndex(getNextIndex(imageIndex, galleryImages));
            event.stopPropagation();
          }}
          src={galleryImages[imageIndex]}
          type="image"
          alt="interior"
          key={galleryImages[imageIndex]}
        />
      </div>
    </div>,
    portal
  );
};

export default Modal;
