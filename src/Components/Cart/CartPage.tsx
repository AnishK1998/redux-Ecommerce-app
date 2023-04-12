import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ProductsData } from "../models/model";
import { quantityIncrementor, quantityDecrementor,removeItem } from "../../ReduxStore/Slices/cartItem";
import "../styles/styling.css";
const CartPage = () => {
  const items = useSelector((state: any) => state.addToCart);
  const dispatch = useDispatch()
  const handleQuantityDecrement = (item: number)=>{
    dispatch(quantityDecrementor(item))
  }
  const handleQuantityIncrement = (item: number)=>{
    dispatch(quantityIncrementor(item))
  }
  const handleRemove = (item: number) => {
    dispatch(removeItem(item))
  }
  return (
    <div className="overflow-y-clip">
      <p className="text-2xl font-bold text-center mt-5">Item Details Page</p>
      {items.length > 0 ? (
        items.map((item: ProductsData) => {
          return (
            <section className="container mt-5 h-auto mx-auto bg-slate-100 w-1/2 shadow-lg drop-shadow-xl my-5" key={item.id}>
              <p className="font-bold text-lg my-3 text-center">
                Category : {item.category}
              </p>
              <div className="md:flex justify-items-center">
                <div className="w-fit mr-2 mb-4">
                  <img src={item.image} alt="fakeapi" className="rounded-2xl" />
                </div>
                <div className="grid md:grid-flow-col">
                  <div className="mx-4">
                    <p className="font-bold text-base my-3">
                      Price : ₹ {item.price}
                    </p>
                    <p className="font-bold text-base">{item.title}</p>
                    <p className="mt-8">
                      <strong>Total :</strong> ₹ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="my-4 flex justify-around font-bold text-lg w-16 bg-slate-400">
                      <span className="cursor-pointer" onClick={() => handleQuantityDecrement(item.id)}>-</span>
                      <span>{item.quantity}</span>
                      <span className="cursor-pointer" onClick={() => handleQuantityIncrement(item.id)}>+</span>
                    </div>
                  </div>
                  <div className="mx-4 ">
                    <p className="font-bold text-base my-3">
                      Rating :{" "}
                      <span className="bg-green-800 text-white px-2 font-normal text-sm">
                        {item.rating.rate} ☆
                      </span>
                    </p>
                    <p className="text-sm text-slate-500 line-clamp-5">
                      {item.description}
                    </p>
                    <p className=" bottom-16">
                      <strong>Remove : </strong>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="1x"
                        className="cursor-pointer text-red-600"
                        onClick={() => handleRemove(item.id)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <div className="flex justify-center items-center cartHeight mx-3">
          <div>
            <img
              src={process.env.PUBLIC_URL + "./Image/searching.gif"}
              alt="item not found"
              className="h-60 w-full object-top py-2 rounded-2xl"
            />
          </div>
          <div>
            <p className="font-bold text-2xl">
              Sorry Couldn't Find any item in the Cart
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
