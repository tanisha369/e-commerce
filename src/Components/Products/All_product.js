import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./All_Product_page.css";
import { useStateValue } from "../Reducer/StateProvider";

const list = [
  {
    id: "0001",
    title: "Khaki",
    price: 450,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75",
    rating: 1,
  },
  {
    id: "00020",
    title: "Khaki",
    price: 450,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75",
    rating: 1,
  },
  {
    id: "0002",
    title: "Brushed",
    price: 300,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F265210.jpg?alt=media&token=0265a3cf-4c06-4bee-a32d-ed8c0f56a35b",
    rating: 1,
  },
  {
    id: "0003",
    title: "Brown",
    price: 375,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F291558.jpg?alt=media&token=c4db1e73-f7b0-4ccd-974b-9a56a1c02831",
    rating: 1,
  },
  {
    id: "0004",
    title: "Check",
    price: 2500,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F583408.jpg?alt=media&token=66558eb9-baaf-4b99-88ce-7609ba8dbe9d",
    rating: 5,
  },
  {
    id: "0005",
    title: "Smart",
    price: 1400,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F648732.jpg?alt=media&token=d15e452e-38b0-4719-96a5-e124b449c530",
    rating: 4,
  },
  {
    id: "0005",
    title: "Smart",
    price: 1400,
    image:
      "https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F648732.jpg?alt=media&token=d15e452e-38b0-4719-96a5-e124b449c530",
    rating: 4,
  },
];
function All_product(props) {
  // const [] = useStateValue();
  const [product, setProduct] = useState(list);
  useEffect(() => {
    if (props.searchValue) {
      list
        .filter(
          (prod) =>
            prod.title.toLocaleLowerCase() ===
            props.searchValue.toLocaleLowerCase()
        )
        .map((data) => {
          setProduct([data]);
        });
    } else {
      setProduct(list);
    }
  }, [props.searchValue]);
  return (
    <div className="home">
      <div className="home__container">
        <div className="ad_space"></div>
        {/* it's enough ilter((produ)=> produ.title === props.search)*/}
        <div className="home__row">
          {product.map((data, index) => (
            <Product
              key={index}
              id={data.id}
              title={data.title}
              price={data.price}
              image={data.image}
              rating={data.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default All_product;
