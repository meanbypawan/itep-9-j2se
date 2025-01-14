import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/Api";
function Product(){
   const [productList,setProductList] = useState([]); 
   const navigate = useNavigate();
   useEffect(()=>{
      loadProducts();
   },[]); 

   const loadProducts = async ()=>{
    try{
     let response =  await axios.get(Api.LOAD_PRODUCT);
     console.log(response.data.products);
     setProductList(response.data.products);
    }
    catch(err){
        console.log(err);
    }
   }
   const navigateToViewMore = (id)=>{
      navigate(`view-more/${id}`);
   }
   return <>
     <div className="container mt-5">
        <div className="row">
          {productList.map((product,index)=><div key={index} className="col-md-3 p-2">
             <div className="d-flex flex-column align-items-center" style={{boxShadow: "10px 10px 10px grey", height:"auto"}}>
                 <img src={product.thumbnail} style={{height:"200px", width:"100%"}}/>
                 <p>{product.title}</p>
                 <h3><label className="text-success">{product.price} Rs.</label></h3>
                 <button onClick={()=>navigateToViewMore(product._id)} style={{width:"100%"}} className="btn btn-secondary text-white">View more</button>
             </div>
          </div>)}
        </div>
     </div>
   </>
}

export default Product;







