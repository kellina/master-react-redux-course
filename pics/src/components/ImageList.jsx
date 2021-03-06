import React, { Component } from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

export class ImageList extends Component {
  render(props) {
    const images = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image} />;
    });
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
