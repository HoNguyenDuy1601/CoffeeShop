import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useAuth } from "../../contexts/auth-context";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useCartItems } from "../../contexts/cart-context";

const Navbar = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const { userInfo } = useAuth();
  const auth = getAuth();
  const history = useHistory();
  const { cart, setCart } = useCartItems();

  useEffect(() => {
    if (userInfo?.email) history.push("/");
  }, [history, userInfo?.email]);
  //  }, [ userInfo?.email]);
  // function animation() {
  //   var tabsNewAnim = $("#navbarSupportedContent");
  //   var activeItemNewAnim = tabsNewAnim.find(".active");
  //   var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  //   var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  //   var itemPosNewAnimTop = activeItemNewAnim.position();
  //   var itemPosNewAnimLeft = activeItemNewAnim.position();
  //   $(".hori-selector").css({
  //     top: itemPosNewAnimTop.top + "px",
  //     left: itemPosNewAnimLeft.left + "px",
  //     height: activeWidthNewAnimHeight + "px",
  //     width: activeWidthNewAnimWidth + "px",
  //   });
  //   $("#navbarSupportedContent").on("click", "li", function (e) {
  //     $("#navbarSupportedContent ul li").removeClass("active");
  //     $(this).addClass("active");
  //     var activeWidthNewAnimHeight = $(this).innerHeight();
  //     var activeWidthNewAnimWidth = $(this).innerWidth();
  //     var itemPosNewAnimTop = $(this).position();
  //     var itemPosNewAnimLeft = $(this).position();
  //     $(".hori-selector").css({
  //       top: itemPosNewAnimTop.top + "px",
  //       left: itemPosNewAnimLeft.left + "px",
  //       height: activeWidthNewAnimHeight + "px",
  //       width: activeWidthNewAnimWidth + "px",
  //     });
  //   });
  // }
  // useEffect(() => {
  //   $(window).on("resize", function () {
  //     setTimeout(function () {
  //       // animation();
  //     }, 500);
  //   });
  // }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        toast.success("Đăng xuất thành công");
        history.push("/");
        setCart([]);
      })
      .catch((error) => {
        toast.error("Đăng xuất thất bại. Thử lại!");
      });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg" ref={nodeRef}>
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        MetaCoffee
      </NavLink>
      {userInfo?.email ? (
        <div className="name font-bold">{`Xin chào ${userInfo?.displayName}`}</div>
      ) : null}

      <button
        onClick={function () {
          setTimeout(function () {
            setShow(true);
            // animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="button_collapse bg-red"
      >
        <i className={`fas fa-bars luxubu cur`}></i>
      </button>

      <div
        className={`collapse ${show ? "show" : "hide"}  navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto ">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/" exact>
              Trang chủ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/caphe" exact>
              Cà phê
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tra" exact>
              Trà
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu" exact>
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/giohang" exact>
              Giỏ hàng
            </NavLink>
          </li>
          {userInfo?.email ? (
            <div className="name cursor-pointer" onClick={handleSignOut}>
              Đăng xuất
            </div>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup" exact>
                  Đăng ký
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin" exact>
                  Đăng nhập
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
