import React, { FC } from "react";
import Gallery from "../../components/gallery/Gallery";
import getFilesSourcesArray from "../../utils/getFilesSourcesArray";

const images = getFilesSourcesArray(require.context("../../assets/images/archive"));

const ArchivePage: FC = () => {
  return <Gallery images={images} />;
};

export default ArchivePage;
