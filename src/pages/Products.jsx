import { useParams } from "react-router-dom";

function Products(){
    let {mainPath, path} = useParams();
    console.log(mainPath);
    console.log(path);
    return (
        <div>
            products
        </div>
    )
}

export default Products;