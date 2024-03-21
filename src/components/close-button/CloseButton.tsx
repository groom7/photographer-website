import React, { FC } from "react";
import styles from "./CloseButton.module.css";

const CloseButton: FC = () => {
  return (
    <div className={`${styles.closeButton}`}>
      <span className={styles.closeButtonLine} />
      <span className={styles.closeButtonLine} />
    </div>
  );
};

export default CloseButton;
