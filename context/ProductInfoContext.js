import React, { createContext, useState } from "react";

const initialState = {
  imgSrc: "square-purple-2",
  title: "Infinix Note 5s",
  link: "#",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?",
};

export const ProductInfoContext = createContext();

const ProductInfoContextProvider = (props) => {
  const [productInfo, setProductInfo] = useState(initialState);

  const getProductInfo = (searchItem) => {
    // perform axios request to backend to get product from web
    setProductInfo(productInfo);
  };

  return (
    <ProductInfoContext.Provider value={{ productInfo, getProductInfo }}>
      {props.children}
    </ProductInfoContext.Provider>
  );
};

export default ProductInfoContextProvider;
