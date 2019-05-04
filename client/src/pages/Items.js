import React, { Component } from "react";
mport API from "../utils/API";
import { Link } from "react-router-dom";

class Items extends Component {
  state = {
    Items: [],
    releaseDate: "",
    image_name: "",
    myStash: "",
    styleSize_Preemie: "",
    styleSize_Newborn: "",
    styleSize_Baby: "",
    styleSize_ToddlerKid: "",
    styleSize_Baby: "",
    styleSize_Mommy: "",
    styleSize_BBNudeNylon: "",
    styleSize_BBBlackNylon: "",
    styleSize_BBClip: "",
    styleSize_SkinnyNudeNylon: "",
    styleSize_LittleClip: "",
    styleSize_MiniWrapNewborn: "",
    styleSize_MiniWrapBaby: "",
    styleSize_MiniWrapToddlerKid: "",
    styleSize_MiniWrapMommy: "",

  };


  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ 
        Items: res.data, 
        releaseDate: "",
        image_name: "",
        myStash: "",
        styleSize_Preemie: "",
        styleSize_Newborn: "",
        styleSize_Baby: "",
        styleSize_ToddlerKid: "",
        styleSize_Baby: "",
        styleSize_Mommy: "",
        styleSize_BBNudeNylon: "",
        styleSize_BBBlackNylon: "",
        styleSize_BBClip: "",
        styleSize_SkinnyNudeNylon: "",
        styleSize_LittleClip: "",
        styleSize_MiniWrapNewborn: "",
        styleSize_MiniWrapBaby: "",
        styleSize_MiniWrapToddlerKid: "",
        styleSize_MiniWrapMommy: "" })
      )
      .catch(err => console.log(err));
  };

  

  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveitem({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
           
            
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Items On My List</h1>
            </Jumbotron>
            {this.state.Items.length ? (
              <List>
                {this.state.Items.map(item => (
                  <ListItem key={item._id}>
                    <Link to={"/Items/" + item._id}>
                      <strong>
                        {item.title} by {item.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteitem(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Items;