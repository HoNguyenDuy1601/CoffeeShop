import React from "react";
import CardItem from "../../Components/card/CardItem";

const Tra = () => {
  return (
    <div className="mt-[50px] mb-[50px]">
      <h1 className="ml-[100px] capitalize font-bold text-2xl">Trà tại nhà</h1>
      <div className="flex flex-row row ml-20 mr-20 mt-[20px]">
        <CardItem
          img="https://product.hstatic.net/1000075078/product/giftset-tra-tearoma_5bb77a734c2447839a593f18ef27730b_large.jpg"
          name="Giftset Trà Tearoma"
          price="169.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg"
          name="Trà Đào Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-lai-tui-loc-tearoma_40bb74e6f61d40a4b9d25e60d8ef48e5_large.jpg"
          name="Trà Lài Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-oolong-tui-loc-tearoma_25eb1abe370f496da4f3818529d9db19_large.jpg"
          name="Trà Oolong Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
        ></CardItem>
      </div>
      <div className="flex flex-row row ml-20 mr-20 mt-[100px]">
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-sen-tui-loc-tearoma_e2c0c29d6e7a4933b983f0758a7aa752_large.jpg"
          name="Trà Sen Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-xanh-la-tearoma_1c34305d05ea400396a35410b6057bc1_large.jpg"
          name="Trà Xanh Lá Tearoma 100gr"
          price="74.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-sen-la-tearoma_c7bf3d1ec9ff4bab8be9398c6dc34b0e_large.jpg"
          name="Trà Sen Lá Tearoma 100gr"
          price="79.000 đ"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-oolong-la-tearoma_192a4d551aec4a1aa3df42f922c45b68_large.jpg"
          name="Trà Oolong Lá Tearoma 100gr"
          price="98.000 đ"
        ></CardItem>
      </div>
      <div className="flex flex-row row ml-20 mr-20 mt-[100px]">
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-lai-la-tearoma_25bef8ca40a2489cacccf5ffea2db75c_large.jpg"
          name="Trà Lài Lá Tearoma 100gr"
          price="79.000 đ"
        ></CardItem>
      </div>
    </div>
  );
};
export default Tra;
