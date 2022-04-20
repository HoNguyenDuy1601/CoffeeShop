import React from "react";
import CardReview from "../card/CardReview";

const Riview = () => {
  return (
    <div className="bg-[#FFE4C0] grid xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <CardReview
        img="https://file.hstatic.net/1000075078/file/hi-tea-dao-web_4af87aa02c5a4662a51984c091acceb2.png"
        review="Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ."
        name="HI-TEA Đào"
      ></CardReview>
      <CardReview
        img="https://file.hstatic.net/1000075078/file/hi-tea-vai-web_11bd1f2a429b45278f0345cb429675d3.png"
        review="Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy."
        name="HI-TEA Vải"
      ></CardReview>
      <CardReview
        img="https://file.hstatic.net/1000075078/file/hi-tea-yuzu-web_bcfc5990ca6e4f28b1f4c3d1d318ab4b.png"
        review="Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ."
        name="HI-TEA Yuzu"
      ></CardReview>
      <CardReview
        img="https://file.hstatic.net/1000075078/file/sobert-dao-web_835e47755def441690ac5664845abc0c.png"
        review="Những miếng đào vàng ươm kết hợp với đá tuyết vị xoài mát lành, cùng nền trà hoa Hibiscus chua dịu đem đến cảm giác lạ miệng, hấp dẫn đến tận ngụm cuối cùng."
        name="HI-TEA Đá Tuyết Xoài Đào"
      ></CardReview>
      <CardReview
        img="https://file.hstatic.net/1000075078/file/sobert-yuzu-web_58c1ee6eabfc4696aa70632bf37d952e.png"
        review="Vị trà hoa Hibiscus chua chua, kết hợp cùng đá xay Yuzu mát lạnh tái tê thêm miếng vải căng mọng, ngọt ngào sẽ khiến bạn thích thú ngay từ lần thử đầu tiên."
        name="HI-TEA Đá Tuyết Yuzu Vải"
      ></CardReview>
    </div>
  );
};

export default Riview;
