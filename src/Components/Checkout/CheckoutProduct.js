import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../Reducer/StateProvider";
import ClearIcon from "@material-ui/icons/Clear";
import { Button, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Product_changer from "../Product_changer/Product_changer";

function CheckoutProduct({ id, image, title, price }) {
  const { dispatch } = useStateValue();
  // const [] = React.useState(null);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        price: price,
        title: title,
        image: image,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>৳</small>
          <strong>{price}</strong>
        </p>
        <Product_changer></Product_changer>
        <Tooltip title="Increase quantity">
          <Button
            type="dashed"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={addToBasket}
          />
        </Tooltip>
        <Tooltip title="Decrease quantity">
          <Button
            type="dashed"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={removeFromBasket}
          />
        </Tooltip>
      </div>

      <ClearIcon className="remove_icon" onClick={removeFromBasket}></ClearIcon>
    </div>
  );
}

export default CheckoutProduct;
