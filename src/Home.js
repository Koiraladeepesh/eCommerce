import React from "react";
import "./Home.css";
import slider from "./images/slider.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={slider} alt="" />

        <div className="home-row">
          <Product
            id="1"
            title="Icon Pursuit Leather Touchscreen Biking Gloves With Knuckle Protection Inner Fleece Warm Winter Riding Gloves"
            price={1499}
            image="https://static-01.daraz.com.np/p/2e300188c1e877e0a8fa97c8d88b48d0.jpg_400x400q75-product.jpg_.webp"
            rating={4}
          />

          <Product
            id="2"
            title="Black Hooded Streetwear Hip Hop Hoodie For Men By Nepster"
            price={2499}
            image="https://static-01.daraz.com.np/p/ffb55302d9e02f6723866d7f32f9f672.jpg_400x400q75-product.jpg_.webp"
            rating={3}
          />

          <Product
            id="3"
            title="Winter Warm Thicken Zipper Japan Hooded Jacket002"
            price={4999}
            image="https://static-01.daraz.com.np/p/bdc540ef66359f61005c28a05a617026.jpg_400x400q75-product.jpg_.webp"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="4"
            title="Fantech Hg12 Full Size Around Ear Gaming Headset"
            price={2699}
            image="https://static-01.daraz.com.np/p/e40aaa84c21b0c5ecd0c842783c4aa79.jpg"
            rating={4}
          />

          <Product
            id="5"
            title="Fantech Combo VX7 Crypto Gaming Mouse and Mp25 Gaming Mouse Pad"
            price={1699}
            image="https://static-01.daraz.com.np/p/ba30b415d91695996c6d5ecb052464c0.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="6"
            title='Hitech LED Monitor 19" Inch Quality and Design'
            price={6349}
            image="https://static-01.daraz.com.np/p/466d11d4abcdd2d5601b8bcdc725c404.jpg"
            rating={4}
          />

          <Product
            id="7"
            title="OnePlus 10T 5G | 8GB RAM & 128GB ROM - Pre-Order Now"
            price={94999}
            image="https://static-01.daraz.com.np/p/7c7e872c00d5c06ffa8c069444d6720a.jpg"
            rating={5}
          />

          <Product
            id="8"
            title="Hyundai LED TV [32HYWGRK7 FHD]"
            price={23900}
            image="https://static-01.daraz.com.np/p/ef2d5703337c22c287d68d5232eb4e69.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
