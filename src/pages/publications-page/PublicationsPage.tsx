import React, { FC } from "react";
import Gallery from "../../components/gallery/Gallery";
import getFilesSourcesArray from "../../utils/getFilesSourcesArray";
import styles from "./PublicationsPage.module.css";

const images = getFilesSourcesArray(require.context("../../assets/images/publications"));

const PublicationsPage: FC = () => {
  return (
    <div className={styles.publicationsWrapper}>
      <title className={styles.title}>Hi home Казань 01 (03) Январь/Февраль 2024</title>
      <Gallery images={images} />
    </div>
  );
};

export default PublicationsPage;
