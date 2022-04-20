import React from "react";
import CardItem from "../../Components/card/CardItem";

const CaPheTaiNha = () => {
  return (
    <div className="mt-[50px] mb-[50px]">
      <h1 className="ml-[100px] capitalize font-bold text-2xl">
        Cà phê tại nhà
      </h1>
      <div className="flex flex-row row ml-20 mr-20 mt-[20px] ">
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg"
          name="Cà Phê Rang Xay Original 1 250gr"
          price="49.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_d26f39e810fa4ade868c338f1423b307_large.jpeg"
          name="Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G"
          price="98.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg"
          name="Cà Phê Sữa Đá Hòa Tan Hộp 10 gói"
          price="39.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"
          name="Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr"
          price="39.000 đ"
        ></CardItem>
      </div>
      <div className="flex flex-row row ml-20 mr-20 mt-[100px]">
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-tui_55b6d640e3594c1b9de982ff6823ebde_large.jpg"
          name="Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr"
          price="79.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/rich-finish-nopromo_485968_400x400_9662f8762f5e4adeb7616cb33a4ac5c3_large.jpg"
          name="Cà Phê Rich Finish Gu Đậm Tinh Tế 350gr"
          price="49.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/peak-plavor-nopromo_715372_400x400_a79f75d18c3949bab63669370424ac4a_large.jpg"
          name="Cà Phê Peak Flavor Hương Thơm Đỉnh Cao 350gr"
          price="49.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/arabica_1_109041_400x400_4b9c43c475574627b6615a70f2ef9086_large.jpg"
          name="Cà Phê Arabica"
          price="98.000 đ"
        ></CardItem>
      </div>
      <div className="flex flex-row row ml-20 mr-20 mt-[100px]">
        <CardItem
          img="https://product.hstatic.net/1000075078/product/p6-lon-3in1_717216_400x400_1afcd0cb780e4749b8a638a839f61c99_large.jpg"
          name="Cà phê sữa đá pack 6 lon"
          price="69.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/24-lon-cpsd_225680_400x400_331b2b7d4f21460a833bfe4cdf6452fa_large.jpg"
          name="Thùng 24 Lon Cà Phê Sữa Đá"
          price="269.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ori-1-1kg_66e116368a5b40e8a2afdf7f5909a94b_large.jpeg"
          name="Cà Phê Rang Xay Original 1 Túi 1KG"
          price="230.000 đ"
        ></CardItem>
      </div>
    </div>
  );
};
export default CaPheTaiNha;
