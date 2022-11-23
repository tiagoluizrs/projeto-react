import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams();

    return <h1>Página do produto {params.id}</h1>
}

export default Product;