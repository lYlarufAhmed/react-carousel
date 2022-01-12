import React, {Component} from 'react';
import Image from 'next/image'

// import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const imagesUrl = [
    {
        url: "https://images.pexels.com/photos/1756958/pexels-photo-1756958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Title 1",
        body: "test body"
    }
    ,
    {
        url: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Title 3",
        body: "test body"
    }
    , {
        url: "https://images.pexels.com/photos/452674/pexels-photo-452674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "Title 2",
        body: "test body"
    }
    ,
 {
        url: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        title: "Title 2",
        body: "test body"
    }
    , {
        url: "https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        title: "Title 2",
        body: "test body"
    }
    , {
        url: "https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        title: "Title 2",
        body: "test body"
    }
    ,

]
const createCarouselItemImage = ({url, title, body}, index = {}) => (
    <div key={url}>
        <img src={url}/>
        {/*<div className={"legend-container"}>*/}
        {/*    <p className={"title"}>{title}</p>*/}
        {/*    <p className={"body"}>{body}</p>*/}
        {/*    <button className="order-now">Order Now</button>*/}
        {/*</div>*/}
        {/*<p className="legend">Legend {index + 1}</p>*/}
    </div>
);
const baseChildren = <div>{imagesUrl.map(createCarouselItemImage)}</div>;

class ProductCarousel extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Carousel autoPlay infiniteLoop
                      emulateTouch
                // renderArrowNext={(clickHandler) => <button onClick={clickHandler}>
                //     <Image
                //         src={"/images/right-arrow.png"}
                //         height={20} width={20}/></button>}
                // renderArrowPrev={(clickHandler) => <button onClick={clickHandler}>
                //     <Image onClick={clickHandler}
                //            src={"/images/left-arrow.png"}
                //            height={20} width={20}/>
                // </button>}
            >
                {baseChildren.props.children}
            </Carousel>
        );
    }
}

ProductCarousel.propTypes = {};

export default ProductCarousel;