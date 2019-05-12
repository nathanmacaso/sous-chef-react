import React, { Component } from 'react';
import slide1 from '../../images/slide-1.jpg';
import slide2 from '../../images/slide-2.jpg';
import slide3 from '../../images/slide-3.jpg';
import logo from '../../images/logo.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100 img-slides" alt="slide-1"/>
              <div className="carousel-caption d-none d-md-block">
                <img className="caption-text" src={logo} alt="Logo"/>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100 img-slides" alt="slide-2"/>
              <div className="carousel-caption d-none d-md-block">
                <h1 className="caption-text">Recipes you can<br/>immediately make</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100 img-slides" alt="slide-3"/>
              <div className="carousel-caption d-none d-md-block">
                <h1 className="caption-text">With the ingredients<br/>you already have</h1>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div> 
        <div className="row py-5 px-3">
          <div className="col-sm-12 col-md-6">
            <iframe width="100%" height="300" src="https://www.youtube.com/embed/bSzlRuYfamE" frameBorder="0" allowFullScreen></iframe>
            <h2 className="home-heading">How it works</h2>
            <p className="home-content">Each user has a customizable virtual pantry.  Sous-Chef then gives you a list of recipes where you have 100% and 75% of the ingredients.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2 className="home-heading">About us</h2>
            <h3 className="home-subheading">Unleash your inner chef</h3>
            <p className="home-content">Cooking is fundamental skill everyone should learn.  Sous-Chef makes cooking at home a breeze by giving you a list of recipes you can immediately make.  Just fill your virtual pantry with ingredients currently in your kitchen, and Sous-Chef will do the rest.</p>
            <p className="home-content">Cooking at home is not only delicious but it can save you money by eating out less and avoiding nasty take-out.  While your pockets are getting a little fatter, rest assured your belly won't.  You control the ingredients and Sous-Chef will watch the calories because each recipe comes with nutritional information.</p>
            <p className="home-content">So now America, with an open heart and an empty stomach, I say unto you in the words of my uncle: 'Allez cuisine!'</p>
          </div>
        </div>
      </div>
    )
  }
}
