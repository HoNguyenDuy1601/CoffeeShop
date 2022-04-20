import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "firebase-app/firebase-config";
import { useAuth } from "../contexts/auth-context";

const { createContext, useState, useContext, useEffect } = require("react");
const CartContext = createContext();
function CartProvider(props) {
  const { userInfo } = useAuth();
  const [cart, setCart] = useState([]);
  const colRef = collection(db, "user");
  // function unique(arr) {
  //   let newArr = [];
  //   if (arr.length > 0) {
  //     newArr = [arr[0]];
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       const co_trong_array_roi = (currentValue) =>
  //         currentValue.name === arr[j].name;
  //       if (arr[i].name !== arr[j].name && !newArr.some(co_trong_array_roi)) {
  //         newArr.push(arr[j]);
  //       }
  //       if (arr[i].name === arr[j].name) {
  //         arr[i].amount = arr[i].amount + 1;
  //       }
  //     }
  //   }
  //   return newArr;
  // }
  function addToCart(newItem) {
    // 3. Cập nhật lại state giỏ hàng (cartItems)
    setCart((prevItems) => {
      // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const isExisted = prevItems.some((item) => item.name === newItem.name);
      // 5. Nếu tồn tại thì trả về danh sách trước đó
      if (isExisted) {
        setCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Chưa tồn tại thì thêm vào giỏ hàng
      setCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }
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
          handleUpdatePost(user, user.id);
        }
      });
    });
  }, [cart]);
  const handleUpdatePost = async (user_object, id_object) => {
    let colRefUpdate = doc(db, "user", id_object);
    await updateDoc(colRefUpdate, {
      fullname: user_object.fullname,
      email: user_object.email,
      id: user_object.id,
      password: user_object.password,
      cart: cart,
    });
  };
  function removeFromCart(name) {
    setCart((prevItems) => {
      const result = prevItems.filter((item) => item.name !== name);
      setCart(result);
    });
  }
  let total = 0;
  let price = 0;
  let number = 0;
  if (cart && cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      price = cart[i].price.match(/\d/g).join("");
      number = cart[i].amount;
      total = total + Number(price) * Number(number);
    }
  }

  total = total.toLocaleString();
  const value = {
    cart,
    setCart,
    removeFromCart,
    addToCart,
    total,
  };
  return <CartContext.Provider value={value} {...props}></CartContext.Provider>;
}

function useCartItems() {
  const context = useContext(CartContext);
  if (typeof context === "undefined")
    throw new Error("useContext must be used within a GalleryProvider");
  return context;
}

export { useCartItems, CartProvider };
