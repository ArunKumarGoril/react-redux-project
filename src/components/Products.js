import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  }

  if(status === "loading") {
    return (
      <h5>Loading...</h5>
    )
  }

  if(status === "error") {
    return (
      <h5 className="alert alert-danger">Something went wrong! Try again later.</h5>
    )
  }

  return (
    <>
      <h3>Products Dashboard</h3>
      <div className="row">
        {products.map((product) => {
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
                  <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
