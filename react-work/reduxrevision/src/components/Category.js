import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../redux-config/CategorySlice";

function Category(){
  const {isLoading,error,categoryList} = useSelector((store)=>store.Category); 
  const dispatch = useDispatch();
  return <>
    <table width="100%" border="1">
      <thead>
        <tr>
          <th>Slug</th>
          <th>Name</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {categoryList?.map((category,index)=><tr key={index}>
          <td>{category.slug}</td>
          <td>{category.name}</td>
          <td>{category.url}</td>
          <td>
            <button onClick={()=>dispatch(removeCategory(category.name))}>Delete</button>
          </td>
        </tr>)}
      </tbody>
    </table>
  </>
}

export default Category;