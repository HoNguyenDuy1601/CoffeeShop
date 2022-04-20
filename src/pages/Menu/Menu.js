import React, { useState } from "react";
import CardItem from "../../Components/card/CardItem";
import "./Testimonial.css";
import useClickOutSide from "../../hooks/useClickOutSide";
const Menu = () => {
  const [menu, setMenu] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide();

  return (
    // <div className=" pt-[100px] ml-10 mr-10">
    <div className=" pt-[20px]">
      {/* <div className="align-top fixed"> */}
      <div
        className={`border-2 border-orange-500 rounded-lg text-center mx-auto sm:w-2/4 md:w-2/4 fixed inset-x-0 ${
          menu ? "top-6" : "top-16"
        } `}
        ref={nodeRef}
      >
        <h3
          className="cursor-pointer py-4 bg-orange-500 px-24 text-white "
          onClick={() => setShow(!show)}
        >
          Chọn sản phẩm
        </h3>
        {show && (
          <div>
            <a
              href="#hi-tea_section"
              className=" cursor-pointer block py-2  bg-white border-orange-100 border-b-2"
            >
              Hi-Tea Healthy
            </a>
            <a
              href="#ca-phe_section"
              className="cursor-pointer block py-2 bg-white border-orange-100 border-b-2"
            >
              Cà Phê
            </a>
            <a
              href="#tra_section"
              className="cursor-pointer block py-2 bg-white border-orange-100 border-b-2"
            >
              Trà
            </a>
            <a
              href="#mon-khac_section"
              className="cursor-pointer block py-2 bg-white border-orange-100 border-b-2"
            >
              Món khác
            </a>
            <a
              href="#banh-snack_section"
              className="cursor-pointer block py-2 bg-white border-orange-100 border-b-2"
            >
              Bánh & Snack
            </a>
            <a
              href="#tai-nha_section"
              className="cursor-pointer block  py-2 bg-white border-orange-100 border-b-2"
            >
              Tại nhà
            </a>
            <a
              href="#bo-suu-tap-qua-tang_section"
              className="cursor-pointer block  py-2 bg-white"
            >
              Bộ sưu tập quà tặng
            </a>
          </div>
        )}
      </div>
      <div className="inline-block mt-28 ">
        <h1
          className=" capitalize font-bold text-2xl ml-10"
          id="hi-tea_section"
        >
          Hi-Tea Trà
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/new-hi-tea-dao_e296c06cefed4b46b01298dd3e7eeee7_large.jpeg"
          name="HI-TEA Đào"
          price="45.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/new-hi-tea-vai_3f0424c2d4314d3c8d645e29f493acb0_large.jpeg"
          name="HI-TEA Vải"
          price="45.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/new-hi-tea-yuzu_1ad3a91af9e247f5a65fb794c232b13d_large.jpeg"
          name="HI-TEA Yuzu"
          price="45.000 đ"
          inline="true"
        ></CardItem>
        <h1 className=" capitalize font-bold text-2xl mt-10 ml-10">
          Hi-Tea Đá Tuyết
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/new-da-tuyet-dao_ef9acf24bea34401a972bfdf49a2b914_large.jpeg"
          name="HI-TEA Đá Tuyết Xoài Đào"
          price="58.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/new-da-tuyet-vai_1380090d927847f3ab21cbe0d845b680_large.jpeg"
          name="HI-TEA Đá Tuyết Yuzu Vải"
          price="58.000 đ"
          inline="true"
        ></CardItem>
        <h1
          className=" capitalize font-bold text-2xl mt-10 ml-10"
          id="ca-phe_section"
        >
          Cà Phê Việt Nam
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg"
          name="Bạc Sỉu Đá"
          price="20.300 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/bac-xiu-nong_fa679e04523c4f138354e852745b223e_large.jpg"
          name="Bạc Sỉu Nóng"
          price="24.500 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg"
          name="Cà Phê Đen Đá"
          price="20.300 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-den-nong_34c4834cd4094d7e8659ad8d3c4fa6fc_large.jpg"
          name="Cà Phê Đen Nóng"
          price="24.500 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg"
          name="Cà Phê Sữa Đá"
          price="20.300 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/bottlecfsd_496652_400x400_c673691fc1de4b359ee22dcf0c9c614f_large.jpg"
          name="Cà Phê Sữa Đá Chai Fresh 250ml"
          price="78.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-sua-nong_0beecc27870549a5bf016dc6a8fac60e_large.jpg"
          name="Cà phê Sữa Nóng"
          price="24.500 đ"
          inline="true"
        ></CardItem>
        <h1 className=" capitalize font-bold text-2xl mt-10 ml-10">
          Cà Phê Máy
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/latte-tao-le-que-nong_f7ae97f81d634489bf5da01a64f7543a_large.jpg"
          name="Latte Táo Lê Quế Nóng"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/latte-tao-le-que-da_77aca1462ea5478d93c6a41f15b1af59_large.jpg"
          name="Latte Táo Lê Quế Đá"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochanong_433980_400x400_7d8231d596fc4ac39db757cd34250868_large.jpg"
          name="Mocha Nóng"
          price="34.300 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mocha-da_538820_400x400_73100250cb904ad0aad79a36a59aeea7_large.jpg"
          name="Mocha Đá"
          price="34.300 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/espressonong_612688_400x400_8fdb6dc2f37a4445b43a7ce3ee4aebb0_large.jpg"
          name="Espresso Nóng"
          price="28.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cfdenda-espressoda_185438_400x400_bc9c244c3c644eccb3edad8578569126_large.jpg"
          name="Espresso Đá"
          price="31.500 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cappuccino_621532_400x400_67c12956866c442585a6d47d0771a978_large.jpg"
          name="Cappuccino Nóng"
          price="34.300 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/capu-da_487470_400x400_e11f07c213814171b07a5801722e3bb3_large.jpg"
          name="Cappuccino Đá"
          price="34.300 đ"
          inline="true"
        ></CardItem>
        <h1
          className=" capitalize font-bold text-2xl mt-10 ml-10"
          id="tra_section"
        >
          Trà trái cây
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-sen-nhan_f58fc9ad254847b1beb3cdfbaa1bd6b5_large.jpg"
          name="Trà Long Nhãn Hạt Sen"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-nhan-da_484810_400x400_446acb3ad76a48d38a98855cd7be54cd_large.jpg"
          name="Trà Long Nhãn Hạt Chia"
          price="31.500 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/nhan-hat-chia--nong_140427_400x400_dffc402ff03b4558999950a750c0973d_large.jpg"
          name="Trà Long Nhãn Hạt Chia Nóng"
          price="35.700 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-sen_905594_400x400_c82fd1b3786d45f380cf4c15e9af7ab9_large.jpg"
          name="Trà Hạt Sen Đá"
          price="31.500 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-sen-nong_025153_400x400_b7b0ec5844c546d2a6d139a65be8aa0a_large.jpg"
          name="Trà Hạt Sen Nóng"
          price="35.700 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-dao-cam-xa_668678_400x400_207c526c987c4026877ebae748c62afd_large.jpg"
          name="Trà Đào Cam Sả Đá"
          price="31.500 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tdcs-nong_288997_400x400_75f2d80e0db2442e9ab752689cbf1001_large.jpg"
          name="Trà Đào Cam Sả Nóng"
          price="35.700 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/bottle_tradao_836487_400x400_82de6433bf5744c0a5dd9108d99191e1_large.jpg"
          name="Trà Đào Cam Sả Chai Fresh 500ml"
          price="107.000 đ"
          inline="true"
        ></CardItem>
        <h1
          className=" capitalize font-bold text-2xl mt-10 ml-10"
          id="mon-khac_section"
        >
          Đá xay
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cf-da-xay-_1__158038_400x400_aee86b1c0779491f8c2778ddadf41f15_large.jpg"
          name="Cà Phê Đá Xay"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/chocolate-ice-blended_183602_400x400_142587be6f4f4dd0885ba746fd4a8c1a_large.jpg"
          name="Chocolate Đá Xay"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cookies_da_xay_f8296fb5c1ee492fabfe0969ab1fc43b_large.jpg"
          name="Cookie Đá Xay"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/daovietquat_033985_400x400_20bfc56b971c47dca8734514a4765675_large.jpg"
          name="Đào Việt Quất Đá Xay"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/matchadaxay_622077_400x400_5c617ff524e64e638ad7c868613a832b_large.jpg"
          name="Matcha Đá Xay"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/sinh-to-viet-quoc_145138_400x400_ab271b0cd8be42089cd7e25f985c273e_large.jpg"
          name="Sinh Tố Việt Quất"
          price="40.600 đ"
          inline="true"
        ></CardItem>
        <h1
          className=" capitalize font-bold text-2xl mt-10 ml-10"
          id="banh-snack_section"
        >
          Bánh mặn
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"
          name="Bánh Mì Que Pate"
          price="12.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/banhmique_683851_400x400_51f39f17da7046ff8ef76aa17c29225a_large.jpg"
          name="Bánh Mì Que Pate Cay"
          price="12.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg"
          name="Bánh Mì VN Thịt Nguội"
          price="29.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg"
          name="Chà Bông Phô Mai"
          price="32.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg"
          name="Croissant Trứng Muối"
          price="35.000 đ"
          inline="true"
        ></CardItem>
        <h1 className=" capitalize font-bold text-2xl mt-10 ml-10">
          Bánh ngọt
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochi-kem-chocolate_7165e6cfb2004ee181447a2e25cb4038_large.jpg"
          name="Mochi Kem Chocolate"
          price="19.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochi-kem-dua-dua_f94d5cd4b40a4377937dcf84033d678e_large.jpg"
          name="Mochi Kem Dừa Dứa"
          price="19.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochi-kem-matcha_55f00f62de7d4ab6a45be817fdb41e75_large.jpg"
          name="Mochi Kem Matcha"
          price="19.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochi-kem-phuc-bon-tu_894faa8a39fb43e0828f2125f6c1e8f9_large.jpg"
          name="Mochi Kem Phúc Bồn Tử"
          price="19.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochi-kem-viet-quat_1072f38b098d4213889c25128a02bce6_large.jpg"
          name="Mochi Kem Việt Quất"
          price="19.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mochi-kem-xoai_f402331583f942819b39a8fa2528d9a2_large.jpg"
          name="Mochi Kem Xoài"
          price="19.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/mousse-gau-chocolate_e25675d96c504dacb88f4e56a54ab48b_large.jpg"
          name="Mousse Gấu Chocolate"
          price="39.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/5d92fbc79e12b47db8cabbd0_chanh-day_994413_400x400_333c9a63c0f74d41a11333c637127328_large.jpg"
          name="Mousse Passion Cheese"
          price="29.000 đ"
          inline="true"
        ></CardItem>
        <h1
          className=" capitalize font-bold text-2xl mt-10 ml-10"
          id="tai-nha_section"
        >
          Cà phê tại nhà
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg"
          name="Cà Phê Rang Xay Original 1 250gr"
          price="49.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_d26f39e810fa4ade868c338f1423b307_large.jpeg"
          name="Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G"
          price="98.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg"
          name="Cà Phê Sữa Đá Hòa Tan Hộp 10 gói"
          price="39.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"
          name="Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr"
          price="39.000 đ"
          inline="true"
        ></CardItem>
        <h1 className=" capitalize font-bold text-2xl mt-10 ml-10">
          Trà tại nhà
        </h1>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/giftset-tra-tearoma_5bb77a734c2447839a593f18ef27730b_large.jpg"
          name="Giftset Trà Tearoma"
          price="169.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-dao-tui-loc-tearoma_0283ea88d37c4685b309d3acda5e6e0e_large.jpg"
          name="Trà Đào Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-lai-tui-loc-tearoma_40bb74e6f61d40a4b9d25e60d8ef48e5_large.jpg"
          name="Trà Lài Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
          inline="true"
        ></CardItem>
        <CardItem
          img="https://product.hstatic.net/1000075078/product/tra-oolong-tui-loc-tearoma_25eb1abe370f496da4f3818529d9db19_large.jpg"
          name="Trà Oolong Túi Lọc Tearoma 20 x 2gr"
          price="28.000 đ"
          inline="true"
        ></CardItem>
        <div className="pb-10">
          <h1
            className=" capitalize font-bold text-2xl mt-10 ml-10"
            id="bo-suu-tap-qua-tang_section"
          >
            Bộ sưu tập quà tặng
          </h1>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/binh-giu-nhiet-inox-trang-den_51c0ae58d6e747d5baf5f596c2c13a96_large.jpeg"
            name="Bình Giữ Nhiệt Inox Trắng Đen 500ML"
            price="250.000 đ"
            inline="true"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/dct06366_3e616ee6e04b46efa10fd64e1e02a4f1_large.jpeg"
            name="Bình Giữ Nhiệt Inox Xám Cam 473ML"
            price="250.000 đ"
            inline="true"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/ong-hut-va-tui_c85ac95c001642febae11119e9ddfb75_large.jpeg"
            name="Bộ Ống Hút Inox"
            price="79.000 đ"
            inline="true"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/coc-su-tch-soc-songjpg_791b4ad46fbc4540a7774d2e8fccf0ef_large.jpeg"
            name="Cốc Sứ The Coffee House Gợn Sóng"
            price="100.000 đ"
            inline="true"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/coc-su-tch-soc-ngang_886a8d8f07b84ce8959b53f61afd339b_large.jpeg"
            name="Cốc Sứ The Coffee House Sọc Ngang"
            price="100.000 đ"
            inline="true"
          ></CardItem>
          <CardItem
            img="https://product.hstatic.net/1000075078/product/tui_tote_da_nang_10ced43815184c8196281478042f9f59_large.jpeg"
            name="Túi Canvas Đà Nẵng"
            price="79.000 đ"
            inline="true"
          ></CardItem>
        </div>
      </div>
    </div>
  );
};
export default Menu;
