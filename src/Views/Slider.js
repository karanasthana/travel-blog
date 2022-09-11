import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Karan1 from '../Assets/slickSlider/karan1.jpg';
import Karan2 from '../Assets/slickSlider/karan2.jpg';
import Karan3 from '../Assets/slickSlider/karan3.jpg';
// import Karan4 from '../Assets/slickSlider/karan4.jpg';
import Karan5 from '../Assets/slickSlider/karan5.jpg';
import Karan6 from '../Assets/slickSlider/karan6.jpg';

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    const imgResponsive = {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
    };
    const imgHeight = {
        maxHeight: '400px',
        width: '80vw',
        padding: '0 10vw',
        backgroundColor: '#fff',
    };
    return (
      <Slider {...settings}>
        <div style={{ backgroundColor: 'pink'}}>
            <img src={Karan1} alt={'Karan-1'} className="img-responsive" style={Object.assign(imgResponsive, imgHeight)} height='400 !important' />
        </div>
        <div>
            <img src={Karan2} alt={'Karan-1'} className="img-responsive" style={Object.assign(imgResponsive, imgHeight)} height='400 !important' />
        </div>
        <div>
            <img src={Karan3} alt={'Karan-1'} className="img-responsive" style={Object.assign(imgResponsive, imgHeight)} height='400 !important' />
        </div>
        {/* <div>
            <img src={Karan4} alt={'Karan-1'} className="img-responsive" style={Object.assign(imgResponsive, imgHeight)} height='400 !important' />
        </div> */}
        <div>
            <img src={Karan5} alt={'Karan-1'} className="img-responsive" style={Object.assign(imgResponsive, imgHeight)} height='400 !important' />
        </div>
        <div>
            <img src={Karan6} alt={'Karan-1'} className="img-responsive" style={Object.assign(imgResponsive, imgHeight)} height='400 !important' />
        </div>
      </Slider>
    );
  }
}