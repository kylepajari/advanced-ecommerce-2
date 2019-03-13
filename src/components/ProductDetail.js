import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={props.imgUrl} alt="image" />
      <h3>{props.name}</h3>
      <p>{props.details}</p>
      <p>Rating: {props.rating}</p>
      <p>Reviews: {props.reviews}</p>
      <h4>{props.price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  details: PropTypes.string,
  rating: PropTypes.string,
  reviews: PropTypes.string,
  price: PropTypes.string
};

export default ProductDetail;
