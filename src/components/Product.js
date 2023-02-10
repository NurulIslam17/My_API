import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        console.log(product);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 bg-warning mx-auto">
            <h3 className="text-center py-2">Product</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
