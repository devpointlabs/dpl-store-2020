import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";

class MainImageForm extends Component {
  state = {
    image: ""
  };

  componentDidMount() {
    if (this.props.product === undefined) {
      //do nothing
    } else {
      this.setState({
        image: this.props.product.main_image
      });
    }
  }

  renderMainImage = () => {
    const { product } = this.props;
    return (
      <div key={product} style={styles.mainImageArea}>
        <h2>Main Image</h2>
        <Dropzone onDrop={file => this.onDrop(file)} multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()} style={styles.dropzone}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p style={styles.text}>drop files here!</p>
                ) : (
                  <p style={styles.text}>Click to add a picture or drag here</p>
                )}
              </div>
            );
          }}
        </Dropzone>
        <img src={product.main_image} style={styles.image} alt="mainProduct" />
      </div>
    );
  };
  onDrop = Files => {
    let data = new FormData();
    data.append("file", Files[0]);
    Axios.put(
      `/api/categories/${this.props.product.category_id}/products/${this.props.product.id}/main_image`,
      data
    )
      .then(res => {
        console.log(res);
        this.setState({
          image: res.data.main_image
        });
        this.props.setMainImage(res.data.main_image);
        this.renderMainImage();
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <>
        {this.props.product ? (
          this.renderMainImage()
        ) : (
          <h4>Please add images after creating product</h4>
        )}
      </>
    );
  }
}

export default MainImageForm;

const styles = {
  dropzone: {
    height: "100%",
    width: "100%",
    // overflow: "hidden",
    border: "1px dashed black",
    borderRadius: "10px",
    alignItems: "center",
    position: "absolute",
    zIndex: "5",
    textAlign: "center",
    display: "inline-Block"
  },
  image: {
    width: "100%",
    height: "100%",
    maxWidth: "150px",
    objectFit: "cover",
    position: "absolute",
    zIndex: "1",
    borderRadius: "10px"
  },
  mainImageArea: {
    width: "100%",
    height: "100%",
    maxHeight: "150px",
    maxWidth: "150px",
    // overflow: "hidden",
    position: "absolute"
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
    WebkitTextFillColor: "black",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "blue"
  }
};
