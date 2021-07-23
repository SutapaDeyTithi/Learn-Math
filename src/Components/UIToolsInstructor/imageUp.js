import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";
// import { Input } from "antd";

// import "./ImageUp.css";

class ImageUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
      }
    
      onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
          pictures: this.state.pictures.concat(pictureFiles)
        });
      }

  render() {
    return (
        <ImageUploader
        withIcon={false}
        withPreview={true}
        buttonText="Add images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        // marginLeft="15%"
      />
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default ImageUp;