import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/productContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Items.css";

const Items = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>Featured Product</h3>
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => {
              return (
                <div className="col-md-6 col-lg-4 col-xl-3" key={product.id}>
                  <div id="product-1" className="single-product">
                    <div
                      className="part-1 "
                      style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <ul>
                        <li>
                          <a href="/">
                            <FontAwesomeIcon icon={faCartPlus} color="black" />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <FontAwesomeIcon icon={faHeart} color="black" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.title}</h3>
                      <h4 className="product-old-price">
                        ${(product.price + 20).toFixed(2)}
                      </h4>
                      <h4 className="product-price">${product.price}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Items;
