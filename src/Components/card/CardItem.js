import React from "react";
import { useCartItems } from "../../contexts/cart-context";
import { toast } from "react-toastify";

// Em muốn làm cho bấm vào button thì nó truyền vào giỏ hàng rồi render ra
const CardItem = (props) => {
  // Cái cart này bấm lần 2 nó mới thêm vào context
  const { cart, setCart } = useCartItems();

  const item = {
    img: props.img,
    name: props.name,
    price: props.price,
    amount: 1,
  };
  return (
    <div
      className={`movie-card rounded-lg p-3 h-full text-black shadow-xl min-h-[500px] mt-[50px] ${
        props.inline ? "inline-block ml-10" : "mx-auto"
      }`}
    >
      <img
        alt=""
        src={props.img}
        className="w-[250px] h-[250px] rounded-lg mb-3 cursor-pointer max-w-[250px] hover:animate-pulse hover:scale-105"
      ></img>
      <div className="flex flex-col flex-1 ">
        <h3 className="text-xl font-bold mb-3 max-w-[250px] h-[50px]">
          {props.name}
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10 max-w-[250px]">
          <span>{props.price}</span>
        </div>
        <button
          className="py-3 px-6 text-sm font-medium bg-orange-400 rounded-lg mb-auto text-white hover:bg-orange-300"
          onClick={() => {
            let list = [item, ...cart];
            if (list.length > 0) {
              for (let i = 0; i < list.length; i++) {
                for (let j = i + 1; j < list.length; j++) {
                  if (list[i].name === list[j].name) {
                    list[j].amount = list[j].amount + 1;
                    list.splice(i, 1);
                  }
                }
              }
            }
            setCart(list);
            toast.success("Đã thêm vào giỏ hàng", {
              autoClose: 1000,
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default CardItem;
