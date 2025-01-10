import axios from "axios";
import { useEffect, useState } from "react";

function Product(){
   const [productList,setProductList] = useState([]); 
   useEffect(()=>{
      loadProducts();
   },[]); 

   const loadProducts = async ()=>{
    try{
     let response =  await axios.get("http://localhost:3001/product/list");
     console.log(response.data.products);
     setProductList(response.data.products);
    }
    catch(err){
        console.log(err);
    }
   }
   return <>
     <div className="container mt-5">
        <div className="row">
          {productList.map((product,index)=><div key={index} className="col-md-3 p-2">
             <div className="d-flex flex-column" style={{boxShadow: "10px 10px 10px grey", height:"300px"}}>
                 <img src={product.images[0]} style={{height:"200px", width:"100%"}}/>
             </div>
          </div>)}
        </div>
     </div>
   </>
}

export default Product;







