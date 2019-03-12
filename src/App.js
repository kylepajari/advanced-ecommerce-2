import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import ProductDetail from "./components/ProductDetail";
import ImageSlider from "./components/ImageSlider";

function App(props) {
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <SubHeader />
        <TopNav />
        <ImageSlider />
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5>
                <span>FEATURED</span> PRODUCTS
              </h5>
              <div className="section group">
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g1.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$512.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g2.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$400.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g9.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$350.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g4.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$275.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g5.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$780.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g6.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$440.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g4.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$130.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g1.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$560.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g9.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$870.00"
                />
                <ProductDetail
                  Title="Lorem Ipsum is simply"
                  Src="images/g6.jpg"
                  Details="Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
        reprehenderit."
                  Price="$565.00"
                />
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
