import { useParams } from 'react-router-dom';

function Product() {

    const { id } = useParams(); 
    console.log(parseInt(id));

    return (
        <div>
            product
        </div>
    )
}

export default Product;