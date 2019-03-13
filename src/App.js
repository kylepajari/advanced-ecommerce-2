import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";
import ImageSlider from "./components/ImageSlider";
import state from "./state";
import PropTypes from "prop-types";

function App(props) {
  const productsArr = state.products.filter(product => {
    let match = null;
    if (product.category === props.currentCategory) {
      match = product;
    }
    return match;
  });

  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <SubHeader />
        <TopNav changeCategory={props.changeCategory} />
        <ImageSlider />
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5>
                <span>FEATURED</span> PRODUCTS
              </h5>
              <div className="section group">
                {productsArr.map((product, i) => {
                  return (
                    <ProductDetail
                      name={product.name}
                      imgUrl={product.imgUrl}
                      description={product.description}
                      price={product.price}
                      rating={product.rating}
                      reviews={product.reviews}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  changeCategory: PropTypes.func
};

export default App;
