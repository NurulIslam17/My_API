import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <h3 className="text-center py-2">Product</h3>
      {product &&
        product.map((product) => {
          return <p key={product.id}> {product.title} </p>;
        })}
    </>
  );
};

export default Product;
