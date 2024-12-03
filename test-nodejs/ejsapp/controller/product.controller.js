export const addProductPage = (request,response,next)=>{
    response.render("add-product.ejs");
}

export const addProductAction = (request,response,next)=>{
        console.log(request.body);
}