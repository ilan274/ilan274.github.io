import React, { Component } from 'react';

export class Dogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      imageSrc: '',
      message: 'Loading image. Please wait :)'
    };
    this.updateImage = this.updateImage.bind(this);
    this.randomButton = this.randomButton.bind(this);
  }

  updateImage(image) {
    this.setState({ imageSrc: image, loading: false });
  }

  randomButton() {
    this.setState({ loading: true });
    this.randomImage();
  }

  randomImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((request) => request.json())
      .then((data) => {
        if (data.message.includes('terrier')) {
          const msg = "Didn't load because it's a Terrier dog (part of the exercise).";
          this.setState({ message: msg });
        } else {
          this.setState({message: 'Loading image. Please wait :)'})
          this.updateImage(data.message);
        }
      });
  }

  componentDidMount() {
    this.randomImage();
  }


  render() {
    return (
      <div>
        {this.state.loading ? <p>{this.state.message}</p> : <img width={200} alt="Xablau" src={this.state.imageSrc}></img>}
        <br />
        <button onClick={this.randomButton}>Change image</button>
      </div>
    );
  }
}

export default Dogs;
