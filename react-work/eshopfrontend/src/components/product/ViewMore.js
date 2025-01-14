import { useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../apis/Api";

export default function ViewMore(){
    const params = useParams();
    const [product,setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        getProductById();
    },[]);

    const getProductById = async()=>{
     try{   
      let response =  await axios.get(Api.PRODUCT_BY_ID+`/${params.id}`);
      console.log(response.data.product);
      setProduct(response.data.product);
     }
     catch(err){
        console.log(err);
     } 
    }
    return <>
      <Header/>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between">
            <div  className="col-md-6 d-flex flex-column" style={{height:"500px",boxShadow:"10px 10px 10px grey"}}>
              <img src={product.thumbnail} style={{width:"100%", height:"400px"}}/>  
              <div className="d-flex d-flex justify-content-center align-items-center">
                {product?.images?.map((image,index)=><img src={image} key={index} style={{width:"30%", height:"80px"}}/>)}
              </div>
            </div>
            <div className="col-md-6" style={{height:"500px", boxShadow:"10px 10px 10px grey"}}>
               <div className="p-3 d-flex flex-column"> 
                <h4>{product.title} [{product.brand}] <del className="text-danger">{product.price} Rs</del></h4>
                <p>{product.description}</p>
                <p>Category : <b>{product?.category?.toUpperCase()}</b></p>
                <p>Warranty Information : <b>{product.warrantyInformation}</b></p>
                <p>Shipping Information : <b>{product.shippingInformation}</b></p>
                <p>Availability Status : <b>{product.availabilityStatus}</b></p>
                <p>Discount : <b>{product.discountPercentage} %</b> <b><label className="text-success" style={{fontSize:"30px"}}>{(product.price - (product.price*product.discountPercentage)/100).toFixed(2)} Rs.</label></b></p>
                <p>Rating : <b>{product.rating}(5)</b></p>
                <button onClick={()=>navigate("/buy-now")} className="btn btn-warning p-2">Buy now</button>
              </div>
            </div>
        </div>
      </div>
    </>
}