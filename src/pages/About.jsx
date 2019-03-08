import React, { Component, Fragment } from "react";
import Title from "../components/Title";
import Banner from "../components/Banner";
import imgBanner from "../assets/images/banner-page.jpg";

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Banner img={imgBanner} alt="Banner promocional" style={{marginBottom: 30}} />
          <Title>Imagine Shop</Title>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet aliquet diam. Aliquam erat volutpat. Nulla auctor, odio eu congue molestie, ligula est bibendum justo, eget laoreet orci lacus nec orci. </p>
          <p>Mauris non laoreet nunc. Curabitur finibus, dui a pharetra scelerisque, tellus magna facilisis neque, congue porttitor ligula quam vel erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis libero vitae eleifend tempus. Maecenas cursus a nisi vel hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id ipsum eu neque sagittis fermentum sit amet in lacus. Aliquam mattis in mauris ac efficitur.</p>
          <p>Maecenas turpis mauris, tincidunt ac tempor sit amet, fermentum eget libero. Proin commodo aliquet magna et rutrum. Ut congue consequat risus ut pharetra. Sed eu ornare lorem. Fusce ultricies, libero et convallis aliquet, dui ex feugiat dolor, ut sagittis est velit eget odio. In sit amet hendrerit lectus. Proin id placerat nisl, vel bibendum quam. Duis tempor pharetra egestas. Aenean vestibulum arcu id felis dictum, iaculis eleifend elit pellentesque. Phasellus et quam erat.</p>
        </div>
      </Fragment>
    )
  }
}

export default About;