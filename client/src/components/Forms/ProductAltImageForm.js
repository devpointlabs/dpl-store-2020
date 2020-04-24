import axios from "axios";
import React, { Component } from "react";
import { Icon, Image, Button, Grid } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import ImageIcon from "../../images/Image_Icon.png";

class AltImageForm extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.getAltImages();
  }

  getAltImages = async () => {
    if (this.props.product) {
      const { product } = this.props;
      const res = await axios.get(`/api/products/${product.id}/images`);
      this.setState({
        images: res.data
      });
    } else {
      this.setState({
        images: []
      });
    }
  };

  addImage = () => {
    const images = [...this.state.images, { url: ImageIcon }];

    this.setState({ images });
  };

  newAltImageFormat = () => {
    return (
      <Grid.Column width={4}>
        <div key="new _alt_Image">
          <Dropzone onDrop={file => this.onDrop(file)} multiple={false}>
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div {...getRootProps()} style={styles.dropZoneArea}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p style={styles.text}>drop files here!</p>
                  ) : (
                    <p style={styles.text}>
                      Click to add a picture or drag here
                    </p>
                  )}
                  <img
                    src={ImageIcon}
                    style={styles.dropZoneImage}
                    alt="thumbnail"
                  />
                </div>
              );
            }}
          </Dropzone>
        </div>
      </Grid.Column>
    );
  };

  deleteAltImage = image => {
    axios
      .delete(`/api/products/${image.product_id}/images/${image.id}`)
      .then(res => {
        const newImages = this.state.images.filter(i => {
          if (i.id !== image.id) {
            return i;
          }
        });
        this.setState({
          images: newImages
        });
        return res;
      })
      .catch(e => console.log(e));
  };

  onDrop = Files => {
    const { product } = this.props;
    let data = new FormData();
    data.append("file", Files[0]);
    axios
      .post(`/api/products/${product.id}/images`, data)
      .then(res => {
        this.setState({
          images: [...this.state.images, res.data]
        });
        this.renderAltImages();
      })
      .catch(e => console.log(e));
  };
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };

  renderAltImages = () => {
    return this.state.images.map(image => {
      return (
        <Grid.Column width={4} key={image}>
          <div style={styles.altImageArea}>
            <Button
              as="div"
              style={styles.deleteButton}
              onClick={() => this.deleteAltImage(image)}
              color="red"
            >
              <Icon name="delete" />
            </Button>
            <Image style={styles.image} src={image.url} />
          </div>
        </Grid.Column>
      );
    });
  };

  render() {
    if (this.props.product && this.props.product.id) {
      return (
        <>
          <h2>Alt Images</h2>
          <Grid columns={4}>
            {this.newAltImageFormat()}

            {this.renderAltImages()}
          </Grid>
        </>
      );
    } else {
      return <>{/* <p>please add images after product creation</p> */}</>;
    }
  }
}

export default AltImageForm;

const styles = {
  dropZoneArea: {
    width: "100%",
    height: "100%",
    maxHeight: "150px",
    maxWidth: "150px",
    border: "1px dashed black",
    borderRadius: "10px",
    zIndex: "5"
  },
  image: {
    width: "100%",
    height: "100%",
    maxHeight: "100px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  dropZoneImage: {
    maxWidth: "100%",
    maxHeight: "80%",
    position: "relative",
    top: "-25px",
    objectFit: "cover",
    zIndex: "1",
    borderRadius: "10px"
  },
  altImageArea: {
    width: "100%",
    height: "100%",
    maxHeight: "150px",
    maxWidth: "150px"
  },
  text: {
    color: "light-grey",
    WebkitTextFillColor: "white",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black"
  },
  deleteButton: {
    height: "25px",
    width: "100%"
  }
};
