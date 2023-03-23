import './app.css'
// import Products from './Components/product';
import React, {useState} from 'react'
import ProductList from './Components/prodictList';
import CreateProduct from './Components/createProduct/createProduct'

const array1=[
    {
        id:1,
        name:"shani",
        addresses:"Borivali",
    },
    {
        id:2,
        name:"shani",
        addresses:"Borivali",
    },
    {
        id:3,
        name:"shani3",
        addresses:"Borivali",
    },
    {
        id:4,
        name:"shani",
        addresses:"Borivali",
    }
]

function App(){
let [newProduct,updateProduct]=useState(array1)
    function oncreateProduct(product){
        product.id=array1.length + 1
        updateProduct([product,...newProduct])
    }
    return(<div>
            <ProductList newProduct={newProduct}></ProductList>
            <CreateProduct oncreateProduct={oncreateProduct}></CreateProduct>
        </div>
        )    
}

export default App;