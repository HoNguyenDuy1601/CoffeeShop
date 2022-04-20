import React from "react";

const Bottom = () => {
  return (
    <div className="text-white h-full bg-black flex flex-row row justify-center pt-10 pb-10 gap-[100px] align-top">
      <div>
        <h1 className="font-bold py-3 cursor-pointer">Giới thiệu</h1>
        <h3 className="cursor-pointer py-1">Về chúng tôi</h3>
        <h3 className="cursor-pointer py-1">Sản phẩm</h3>
        <h3 className="cursor-pointer py-1">Khuyến mãi</h3>
        <h3 className="cursor-pointer py-1">Cửa hàng</h3>
        <h3 className="cursor-pointer py-1">Tuyển dụng</h3>
      </div>
      <div>
        <h1 className="font-bold py-3 cursor-pointer">Điều khoản</h1>
        <h3 className="cursor-pointer py-1">Điều khoản sử dụng</h3>
        <h3 className="cursor-pointer py-1">Quy tắc bảo mật</h3>
      </div>
      <div>
        <h1 className="font-bold py-3 cursor-pointer">Đặt hàng</h1>
        <h3 className="py-1">Liên hệ</h3>
        <h3 className="max-w-[200px] py-1">
          76/1 Dương Văn Cam, Linh Tây, Thủ Đức
        </h3>
      </div>
    </div>
  );
};

export default Bottom;
