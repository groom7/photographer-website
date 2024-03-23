import React, { FC } from "react";
import Gallery from "../../components/gallery/Gallery";
import getFilesSourcesArray from "../../utils/getFilesSourcesArray";

const images = getFilesSourcesArray(require.context("../../assets/images/main"));

const MainPage: FC = () => {
  return <Gallery images={images} />;
};

export default MainPage;
