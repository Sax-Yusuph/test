import React, { createContext, useState } from 'react'
import mockdata from "./mockdata";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProduct] = useState(mockdata)

    const getProduct = (productName) =>{
        setProduct(products)
    }

    return (
        <ProductContext.Provider value={{products, getProduct} }>
           { props.children }
        </ProductContext.Provider>
    )
}


export default ProductContextProvider

