import slide_1 from '../../assets/slider-img/kombo-box_slider.jpg'
import slide_2 from '../../assets/slider-img/slider-combo.jpg'
import slide_3 from '../../assets/slider-img/slider-new-yorker.jpg'
import slide_4 from '../../assets/slider-img/uah-slider.jpg'
import './Slider.scss'

import Slider from "react-slick";

const SimpleSlider = () => {

    const settings = {
        arrows: false,
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        buttons: false,
        adaptiveHeight: true,

    };



    return (
        <div className='container'>
            <Slider {...settings} style={{
                margin: '0 auto',
                marginTop: '10px'
            }}>

                <div>
                    <h3><img src={slide_1} alt="slide_1" /></h3>
                </div>
                <div>
                    <h3><img src={slide_2} alt="slide_2" /></h3>
                </div>
                <div>
                    <h3><img src={slide_3} alt="slide_3" /></h3>
                </div>
                <div>
                    <h3><img src={slide_4} alt="slide_4" /></h3>
                </div>

            </Slider>
        </div >
    )
}

export default SimpleSlider;