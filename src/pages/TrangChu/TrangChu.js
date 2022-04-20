import React from "react";
import MapBox from "../../Components/mapbox/MapBox";
import CardItem from "../../Components/card/CardItem";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Review from "../../Components/Review/Review";

const TrangChu = () => {
  return (
    <div className="container">
      <Banner></Banner>
      <div className="mt-[50px] mb-[90px]">
        <div className="flex flex-row row ml-10 mr-10 gap-10">
          <CardItem
            img="https://product.hstatic.net/1000075078/product/new-hi-tea-dao_e296c06cefed4b46b01298dd3e7eeee7_large.jpeg"
            name="HI-TEA Đào"
            price="45.000 đ"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/new-hi-tea-vai_3f0424c2d4314d3c8d645e29f493acb0_large.jpeg"
            name="HI-TEA Yuzu"
            price="45.000 đ"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/new-hi-tea-yuzu_1ad3a91af9e247f5a65fb794c232b13d_large.jpeg"
            name="HI-TEA Đào Cam"
            price="45.000 đ"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/new-da-tuyet-dao_ef9acf24bea34401a972bfdf49a2b914_large.jpeg"
            name="HI-TEA Đá Tuyết Xoài Đào"
            price="45.000 đ"
          ></CardItem>
        </div>
        <div className="flex flex-row row pt-[100px] ml-10 mr-10 gap-10">
          <CardItem
            img="https://product.hstatic.net/1000075078/product/new-hi-tea-yuzu_1ad3a91af9e247f5a65fb794c232b13d_large.jpeg"
            name="HI-TEA Đá Tuyết Yuzu"
            price="65.000 đ"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg"
            name="Bánh Mì VN Thịt Nóng"
            price="30.000 đ"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg"
            name="Chà Bông Phô Mai"
            price="44.000 đ"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg"
            name="Croissant Trứng Muối"
            price="38.000 đ"
          ></CardItem>
        </div>
      </div>
      <Review></Review>
      <MapBox></MapBox>
    </div>
  );
};
export default TrangChu;
