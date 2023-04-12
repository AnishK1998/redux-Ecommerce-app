import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductsData } from "../models/model";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {addItem} from "../../ReduxStore/Slices/cartItem"
const Homepage = () => {
  const [products, setProducts] = useState<ProductsData[]>([]);
  const dispatch = useDispatch()
  const handleAddToCart = (item: ProductsData)=>{
    dispatch(addItem(item))
  }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-3 mb-7 mx-auto">
      <p className="text-center text-2xl font-bold text-gray-700">
        List of Items
      </p>
      <div className="grid md:grid-cols-3 gap-8 justify-items-center mt-4">
        {products.map((elem) => {
          return (
            <div
              className="w-64 bg-neutral-100 rounded-xl hover:translate-y-3 hover:shadow-2xl px-2"
              key={elem.id}
            >
              <img
                src={elem.image}
                className="h-60 w-full object-top py-2 rounded-2xl"
              />
              <p className="font-bold text-lg line-clamp-1">{elem.title}</p>
              <p className="text-sm text-slate-500 line-clamp-3">
                {elem.description}
              </p>
              <p className="font-bold my-1">Price : ₹ {elem.price}</p>
              <div className="flex my-1">
                <Rating
                  name="half-rating"
                  defaultValue={elem.rating.rate}
                  precision={0.5}
                  readOnly
                />
                <p className="font-bold pl-3">{elem.rating.count}</p>
              </div>
              <div className="mb-4 mt-2 flex justify-around">
                <Button variant="contained" onClick={() => handleAddToCart(elem)}>Add To Cart</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
