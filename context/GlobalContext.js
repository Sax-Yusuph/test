import React, { createContext, useState } from 'react'

const initialState =[
    
    {
      website: "Jumia",
      tag: "trendingProducts",
      id: "21212",
      imgSrc: "square-purple-2",
      title: "Infinix Note 5s",
      link: "#",
      price: "50,000",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
    {
        website: "Slot",
        tag: "trendingProducts",
        id: "1212e445",
        imgSrc: "blue-square2",
        title: "Imac pro",
        link: "#",
        price: "53,000",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
    {
        website: "Konga",
        tag: "trendingProducts",
        id: "56754",
        imgSrc: "square-purple-2",
        title: "Hp Envy 7th Gen",
        link: "#",
        price: "55,500",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
    {
        website: "Jumia",
        tag: "trendingProducts",
        id: "786543",
        imgSrc: "square-purple-2",
        title: "washing machine",
        link: "#",
        price: "52,000",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
  
    {
      image: require('assets/img/denys.jpg'),
      tag: "featuredProducts",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?",
      title: "Apple Airpods2 pro",
      id: "34",
    },
    {
      image: require('assets/img/fabien-bazanegue.jpg'),
      tag: "featuredProducts",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?",
      title: "IMac Pro",
      id: "3443",
    },
    {
      image: require('assets/img/mark-finn.jpg'),
      tag: "featuredProducts",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?",
      title: "Infinix Note 5s",
      id: "43333",
    },
    {
      image: require('assets/img/shopping.png'),
      tag: "featuredProducts",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?",
      title: "Infinix Note 5s",
      id: "22233",
    },
 
    {
      website: "Jumia",
      tag: "cheapProducts",
      id: "dsas2",
      imgSrc: "square-purple-2",
      title: "Infinix Note 5s",
      link: "#",
      price: "50,000",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
    {
      website: "Slot",
      tag: "cheapProducts",
      id: "32456",
      imgSrc: "blue-square2",
      title: "Infinix Note 5s",
      link: "#",
      price: "53,000",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
    {
      website: "Konga",
      tag: "cheapProducts",
      id: "8765",
      imgSrc: "square-purple-2",
      title: "Infinix Note 5s",
      link: "#",
      price: "55,500",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    },
    {
      website: "Jumia",
      tag: "cheapProducts",
      id: "8976",
      imgSrc: "square-purple-2",
      title: "Infinix Note 5s",
      link: "#",
      price: "52,000",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem laborum necessitatibus consequuntur, nam harum eius incidunt deleniti dolore quae dolorum?"
    }
  ];

export const GlobalProductsContext = createContext();

const GlobalProductsContextProvider = (props) => {
    const [globalProducts, setGlobalProducts] = useState(initialState)

    const getGlobalProducts = () =>{
      // perform axios request to backend
      setGlobalProducts(globalProducts)
    }

    return (
        <GlobalProductsContext.Provider value={{globalProducts, getGlobalProducts} }>
           { props.children }
        </GlobalProductsContext.Provider>
    )
}


export default GlobalProductsContextProvider

