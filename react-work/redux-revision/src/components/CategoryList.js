import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../redux-config/CategorySlice";

function CategoryList(){
    const {categoryList} = useSelector((store)=>store.CategoryData);
    const dispatch = useDispatch();
    return <>
      <table border='1' width='100%'>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Slug</th>
                <th>Name</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {categoryList.map((category,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{category.slug}</td>
                <td>{category.name}</td>
                <td><button onClick={()=>dispatch(removeCategory(category.slug))}>Remove</button></td>
            </tr>)}
        </tbody>
      </table>
    </>
}

export default CategoryList;