import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card(props) {
  return (
    <div className="card">
      <img className={props.width || "card-img-top"} src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">{props.button || "Learn more"}</a>
      </div>
    </div>
  );
}

function CardList() {
return (
  <div className="row">
    <div className="col-sm-4">
      <Card
        button={'Visit me'}
        width={'w-50'}
        featureImage="https://avatars0.githubusercontent.com/u/41086085?s=460&u=2629e7001ca224f9b014cbe72d46d3c760f22ed0&v=4"
        title="This is my GitHub"
        description="My dream is to become a Full Stack Software Developer 'soon'!"
        link="https://github.com/ilan274/"
      />
      <Card
        featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
        title="How To Make Interactive ReactJS Form"
        description="Let's write some interactive form with React"
        link="https://sebhastian.com/interactive-react-form"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
        title="Babelify your JavaScript code"
        description="Babel make JavaScript code browser-compatible."
        link="https://sebhastian.com/babel-guide"
      />
    </div>
    <div className="col-sm-4">
      <Card
        featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
        title="JavaScript Basics Before You Learn React"
        description="Learn the prerequisites of learning React fast"
        link="https://sebhastian.com/js-before-react"
      />
    </div>
  </div>
);
}

export default CardList;
