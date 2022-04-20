import React, { useEffect, useState } from "react";
import { useCartItems } from "../../contexts/cart-context";
import { db } from "firebase-app/firebase-config";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";

const GioHang = () => {
  let users = [];
  let gio = new Date().getHours().toString();
  let phut = new Date().getMinutes().toString();
  if (phut.length < 2) {
    phut = "0" + phut;
  }

  const ngay = new Date().getDate().toString();
  const thang = new Date().getMonth().toString();
  const nam = new Date().getFullYear().toString();
  const time =
    gio + ":" + phut + " " + "ngày" + " " + ngay + "-" + thang + "-" + nam;
  const [data, setData] = useState([]);
  const [togglePage, setTogglePage] = useState(true);
  const colRef = collection(db, "user");
  const { userInfo } = useAuth();
  if (userInfo?.email) {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
  }
  // let item_DB = [];
  const { cart, removeFromCart, total, setCart } = useCartItems();
  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      users.forEach((user) => {
        if (
          userInfo.displayName === user.fullname &&
          userInfo.email === user.email
        ) {
          // if (user.cart && user.cart.length > 0) item_DB.push(...user.cart);
          setCart(user.cart);
        }
      });
    });
  }, []);
  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      users.forEach((user) => {
        if (
          userInfo.displayName === user.fullname &&
          userInfo.email === user.email
        ) {
          // if (user.cart && user.cart.length > 0) item_DB.push(...user.cart);
          setData(user.involce);
        }
      });
    });
  }, []);
  const handleBuy = async () => {
    if (!userInfo) {
      toast.error("Đăng nhập để mua hàng");
    }
    if (userInfo) {
      users.forEach((user) => {
        if (
          userInfo.displayName === user.fullname &&
          userInfo.email === user.email
        ) {
          let colRefUpdate = doc(db, "user", user.id);
          if (user.involce && user.involce.length > 0) {
            cart.forEach((item) => {
              item.day = time;
            });
            updateDoc(colRefUpdate, {
              fullname: user.fullname,
              email: user.email,
              id: user.id,
              password: user.password,
              involce: [...cart, ...user.involce],
            });
          } else {
            cart.forEach((item) => {
              item.day = time;
            });
            updateDoc(colRefUpdate, {
              fullname: user.fullname,
              email: user.email,
              id: user.id,
              password: user.password,
              involce: cart,
            });
          }
          // Tìm ra user đang đăng nhập thì
          toast.success(
            "Mua hàng thành công, nhân viên tư vấn sẽ gọi để xác nhận đơn hàng trong vòng 24h",
            {
              autoClose: 4000,
            }
          );
          setCart([]);
        }
      });
    }
  };

  // console.log(cart);
  // if (cart.length > 0) {
  //   for (let i = 0; i < cart.length; i++) {
  //     for (let j = i + 1; j < cart.length; j++) {
  //       if (cart[i].name === cart[j].name) {
  //         cart[j].amount = cart[j].amount + 1;
  //         cart.splice(i, 1);
  //       }
  //     }
  //   }
  // }

  return (
    <div className="min-h-[700px]">
      <div className="flex justify-center items-center pt-10 ml-[10%] mr-[10%] gap-[50px]">
        <h1
          onClick={() => setTogglePage(true)}
          className={`${
            togglePage ? "bg-orange-300" : ""
          }  py-4 px-6 border rounded-lg`}
        >
          Giỏ hàng
        </h1>
        <h1
          onClick={() => setTogglePage(false)}
          className={`${
            !togglePage ? "bg-orange-300" : ""
          }  py-4 px-6 border rounded-lg`}
        >
          Đơn mua
        </h1>
      </div>
      {cart &&
        togglePage &&
        cart.length > 0 &&
        cart.map((item, index) => (
          <div
            className="flex justify-between items-center pt-10 ml-[10%] mr-[10%] gap-[10px]"
            key={index}
          >
            <img
              src={item.img}
              alt=""
              className="w-[10%]  rounder-full object-cover"
            ></img>
            <h3 className="w-[200px] text-[90%]">{item.name}</h3>
            <h3 className=" text-[90%]">{item.price}</h3>
            <h3 className=" text-[90%]">{item.amount}</h3>
            <button
              className="py-3 px-6 text-sm font-medium bg-orange-400 rounded-lg text-white hover:bg-orange-300 transition-all ease-out duration-300"
              onClick={() => removeFromCart(item.name)}
              id={index}
            >
              Xóa
            </button>
          </div>
        ))}
      {cart && togglePage && cart.length > 0 && (
        <div className="flex justify-center items-center pt-10 ml-[10%] mr-[10%] gap-[100px]">
          <div className="font-bold">Tổng hóa đơn: {total}đ</div>
          <button
            className="py-4 mb-10 px-10 text-sm font-medium bg-orange-400 rounded-lg text-white hover:bg-orange-300 transition-all ease-out duration-300 "
            onClick={() => handleBuy()}
          >
            Mua hàng
          </button>
        </div>
      )}
      {data &&
        !togglePage &&
        data.length > 0 &&
        data.map((item, index) => (
          <div
            className="flex justify-between items-center pt-10 ml-[10%] mr-[10%] gap-[20px]"
            key={index}
          >
            <img
              src={item.img}
              alt=""
              className="w-[10%]  rounder-full object-cover"
            ></img>
            <h3 className="w-[200px] text-[90%]">{item.name}</h3>
            <h3 className=" text-[90%]">{item.price}</h3>
            <h3 className=" text-[90%]">{item.amount}</h3>
            <h3 className=" text-[90%]">{item.day}</h3>
          </div>
        ))}
    </div>
  );
};
export default GioHang;
