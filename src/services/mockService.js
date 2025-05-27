const products = [
    {
        id: "1",
        title : "Remera JS",
        text: "La mejor remera de Coderhouse",
        price: 20,
        img: "/assets/remera.png",
        stock: 5,
        category: "remeras"
    }, 
     {
        id: "2",
        title : "Remera nodeJS",
        text: "La mejor remera de Coderhouse",
        price: 10,
        img: "/assets/remera.png",
        stock: 55,
        category: "remeras"
    }, 
     {
        id: "3",
        title : "Remera Typescript",
        text: "La mejor remera de Coderhouse",
        price: 25,
        img: "/assets/remera.png",
        stock: 15,
        category: "remeras",
    },     
]

function getProducts(){
    return new Promise( (resolve, reject) => {  
    setTimeout( () => {
      resolve(products)
    }, 3000)
  })
}

export default getProducts;