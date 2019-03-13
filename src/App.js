import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";
import ImageSlider from "./components/ImageSlider";
import state from "./state";

function App(props) {
  let productsArr = state.products.filter(product => {
    let match = null;
    if (product.category === props.currentCategory) {
      match = product;
      console.log(match);
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
                      Title={product.name}
                      Src={product.imgUrl}
                      Details={product.description}
                      Price={product.price}
                      Rating={product.rating}
                      Reviews={product.reviews}
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

export default App;
