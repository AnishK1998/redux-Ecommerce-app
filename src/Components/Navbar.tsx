import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";
import Menucard from "./MenuCard/Menucard";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const item = useSelector((state: any) => state.addToCart);
  const totalItems = item.length;
  return (
    <div className="bg-slate-700 h-auto w-full flex flex-auto justify-between shadow-lg">
      <div className="flex">
        <div className="text-white text-2xl mx-7 my-3">Dribble+Store</div>
        <a href="/cart" className="text-slate-300 text-base py-4 px-3">
          Add To Cart
        </a>
        <a href="/" className="text-slate-300 text-base py-4 px-3">
          Home
        </a>
      </div>
      <div className="py-3 mx-7">
        <Badge
          badgeContent={totalItems}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleMenuClick}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white text-2xl cursor-pointer"
          />
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {totalItems > 0 ? (
            <Menucard />
          ) : (
            <div>
              <div className="flex">
                <i
                  className="fas fa-close ml-auto mr-4 cursor-pointer"
                  onClick={handleMenuClose}
                ></i>
              </div>

              <div className="flex justify-center mx-3">
                <p className="pt-2">Your Cart is empty</p>
                <img
                  src={process.env.PUBLIC_URL + "./Image/emptyCart.gif"}
                  alt="empty cart"
                  className="mx-auto"
                />
              </div>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
