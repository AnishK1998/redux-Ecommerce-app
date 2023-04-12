import React,{useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch} from "react-redux";
import { ProductsData } from "../models/model";
import { removeItem } from "../../ReduxStore/Slices/cartItem";

const Menucard = () => {
  const items = useSelector((state: any) => state.addToCart);
  const [price, setPrice] = useState<number>(0)
  const dispatch = useDispatch()
  const handleRemove = (item: Number)=>{
    dispatch(removeItem(item))
  }
  const totalPrice = ()=>{
    let price = 0;
    items.map((item:ProductsData) => {
      price = (item.price * item.quantity)+ price
    })
    setPrice(parseFloat(price.toFixed(2)))
  }
  useEffect(()=> {
    totalPrice()
  },[totalPrice])
  return (
    <div className="container">
      {items.map((item: ProductsData) => {
        return (
          <div className="grid md:grid-flow-col justify-items-center mb-5 mt-3 bg-slate-100 drop-shadow-xl">
            <div>
              <img src={item.image} alt="fakeapi" className="rounded-2xl w-16 h-20 mr-3" />
            </div>
            <div className="w-48">
              <p className="text-sm line-clamp-2">{item.title}</p>
              <p className="text-sm">Price  : ₹ {item.price}</p>
              <p className="text-sm">Quantity : {item.quantity}</p>
            </div>
            <div className="mx-2 flex items-center">
              <FontAwesomeIcon
                icon={faTrashCan}
                size="1x"
                onClick={() => handleRemove(item.id)}
                className="cursor-pointer text-red-600"
              />
            </div>
          </div>
        );
      })}
      <hr className="border-y-1 border-slate-600"/>
      <p className="text-sm my-2 mx-3">Total : ₹ {price}</p>
    </div>
  );
};

export default Menucard;