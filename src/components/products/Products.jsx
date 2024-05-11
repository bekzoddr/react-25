import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { Container } from "@mui/material";
const Products = ({ data }) => {
  return (
    <Container maxWidth="lg">
      <div className="products">
        {data.map((product) => (
          <div key={product.id} className="card">
            <div className="image">
              <img src={product.thumbnail} alt={product.title} />
              <div className="navigation">
                <button className="cart">
                  <FaCartShopping />
                </button>
                <button className="like">
                  <FaHeart />
                </button>
              </div>
            </div>
            <div className="content">
              <h2>{product.title}</h2>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <MdOutlineStar key={index} />
                ))}
              </div>
              <div className="prices">
                <h3>$494</h3>
                <h2>${product.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
