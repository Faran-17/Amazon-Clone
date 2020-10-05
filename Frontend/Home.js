import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Watch Dogs: Legion"
            price={5999}
            rating={5}
            image="https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/wdl-gameinfo-boxshot_art-ubinew-02-348x434_350637.jpg"
          />
          <Product
            id="49538094"
            title="Call of Duty: Modern Warfare (2019)"
            price={4999}
            rating={5}
            image="https://s01.riotpixels.net/data/bd/57/bd577f0e-1864-46f7-b1c3-aae47f58e6b5.jpg/cover.call-of-duty-modern-warfare.500x609.2019-10-26.34.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Razor Deathadder V.2020"
            price={5999}
            rating={5}
            image="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large_wm_brb/public/field/image/2020/01/razer-deathadder-v2-2020-1.jpg"
          />
          <Product
            id="23445930"
            title="ASUS ZenBook Duo UX481FL-BM5811T Intel Core i5 10th Gen 14-inch FHD Thin and Light Laptop"
            price={92000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81K9Es2DDFL._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={92000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={185000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
