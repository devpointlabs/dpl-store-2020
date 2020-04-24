import React, { Component } from "react";
import { Form, Modal, Button, Icon, Header } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import axios from "axios";
import {useHistory} from 'react-router-dom'

class CategoryForm extends Component {
  state = {
    name: "",
    image: "",
    id: null,
    modalOpen: false,
    category: {},
    deleteConfirm: false
  };

  componentDidMount() {
    if (
      this.props.category === undefined ||
      this.props.category === "All Products"
    ) {
      //do nothing
    } else {
      this.setCategory();
    }
  }
  setCategory = async () => {
    const res = await axios.get(`/api/categories`);
    const category = res.data.filter(category => {
      if (category.name === this.props.category) {
        return category;
      }
    })[0];
    this.setState({
      name: category.name,
      image: category.image,
      id: category.id
    });
  };
  openDeleteConfirm = () =>{
    this.setState({
      deleteConfirm: true
    })
  }
  closeDeleteConfirm = () => {
    this.setState({
      deleteConfirm: false
    })
  }
  deleteCategory = () => {
    axios.delete(`/api/categories/${this.state.id}`).then(res =>{
      console.log(res)
      useHistory().push('/adminpanel')
      this.closeDeleteConfirm()
      this.handleClose()
    }).catch(e=>{
      console.log(e)
      alert("Error! There are Purchase Records with this category")
    })
  
  };

  categoryFormat = () => {
    const { name, image, id } = this.state;
    return (
      <Modal.Content>
        <div id={`${name}-${id}`}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              style={styles.nameInput}
              palceholder="Category Name"
              label="Category Name"
              required
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <div style={styles.imageArea}>
              <Dropzone onDrop={this.onDrop} multiple={false}>
                {({ getRootProps, getInputProps, isDragActive }) => {
                  return (
                    <div {...getRootProps()} style={styles.dropzone}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <>
                          <p style={styles.text}>drop files here!</p>
                        </>
                      ) : (
                        <>
                          <p style={styles.text}>Click to add a picture or drag here</p>
                        </>
                      )}
                    </div>
                  );
                }}
              </Dropzone>
              <img src={image} style={styles.image} alt="Alternate" />
            </div>
            <div style={styles.buttonGroup}>
              <Form.Button positive>Submit</Form.Button>
              <Form.Button onClick={this.handleClose} negative>
                Cancel
              </Form.Button>
              <Form.Button
                negative
                onClick={this.openDeleteConfirm}
                style={styles.delete}
              >
                delete category <Icon name="trash" />
              </Form.Button>
            </div>
          </Form>
        </div>
        <Modal
          open={this.state.deleteConfirm}
          onClose={this.closeDeleteConfirm}
          basic
        >
          {this.deleteModal()}
        </Modal>
      </Modal.Content>
    );
  };
  onDrop = Files => {
    let data = new FormData();
    data.append("file", Files[0]);
    axios
      .put(`/api/categories/${this.state.id}`, data)
      .then(res => {
        console.log(res);
        this.setState({
          image: res.data.image
        });
      })
      .catch(e => console.log(e));
  };

  deleteModal = () => (
    <>
    <Header icon='delete' content='Delete Category?' />
    <Modal.Content>
      <p>
        Are you sure you would like to delete this category?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={this.closeDeleteConfirm}>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted onClick={this.deleteCategory}>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
    </>
  )

  editCategory = () => {
    return (
      <>
        <div
          style={{
            color: "#4575c4",
            display: "flex",
            cursor: "pointer"
          }}
        >
          <h1>{this.state.name}</h1>
          <Modal
            trigger={
              <div onClick={this.handleOpen} style={{}} as="td">
                <h2>
                  <Icon name="edit" />
                </h2>
              </div>
            }
            open={this.state.modalOpen}
            onClose={this.handleClose}
          >
            <div style={styles.modalArea}>{this.categoryFormat()}</div>
          </Modal>
        </div>
      </>
    );
  };
  newCategory = () => (
    <Modal
      trigger={
        <Button onClick={this.handleOpen} style={styles.button}>
          New Category
        </Button>
      }
      open={this.state.modalOpen}
      onClose={this.handleClose}
    >
      <Modal.Content>
        <Form onSubmit={this.submitNew}>
          <Form.Input
            palceholder="Category Name"
            name="name"
            label="Category Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <h4>Please add images after creation</h4>
          <Form.Button positive style={styles.submitBtn}>
            Submit
          </Form.Button>
          <Form.Button
            negative
            onClick={this.handleClose}
            style={styles.cancelBtn}
          >
            Cancel
          </Form.Button>
        </Form>
      </Modal.Content>
    </Modal>
  );

  submitNew = async () => {
    const res = await axios.post(`/api/categories`, { name: this.state.name });
    this.handleClose();
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`/api/categories/${this.state.id}`, {
        name: this.state.name,
        image: this.state.image
      })
      .then(this.handleClose)
      //close form
      .catch();
  };
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    if (this.props.category === undefined) {
      return this.newCategory();
    } else if (this.props.category === "All Products") {
      return <></>;
    } else {
      return this.editCategory();
    }
  }
}

export default CategoryForm;

const styles = {
  dropzone: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    border: "1px dashed grey",
    borderRadius: "10px",
    alignItems: "center",
    zIndex: "5",
    textAlign: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    maxWidth: "800px",
    objectFit: "cover",
    zIndex: "1",
    position: "relative",
    top: "-300px",
    borderRadius: "10px",
  },
  imageArea: {
    width: "100%",
    height: "300px",
    maxWidth: "500px",
    marginBottom: "20px",
  },
  button: {
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)"
  },
  submitBtn: {
    color: "white",
    backgroundColor: "#4901DB",
    borderRadius: "30px",
    width: "150px",
    padding: "2%",
    cursor: "pointer"
  },
  cancelBtn: {
    color: "#4901DB",
    backgroundColor: "lightgrey",
    borderRadius: "30px",
    width: "150px",
    padding: "2%",
    cursor: "pointer"
  },
  delete: {
    padding: "10px"
  },
  modalArea:{
    height: "100%",
    width: "100%",
    margin: "25px"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "wrap",
    position: "relative",
    margin: "25px",
    paddingBottom: "20px"
  },
  nameInput: {
    width: "80%"
  }
};
