import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  }

  return (
    <>
      <div>Cart</div>
      <div className="row">
        {cartProducts.map((product) => {
          return (
            <div className="col-md-3 my-2" key={product.id}>
              <Card className="h-100">
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "100px", height: "130px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>INR - {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                    Remove Item
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
