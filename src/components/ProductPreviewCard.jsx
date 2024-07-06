import { AddProduct } from "./AddProduct";
import pasta from "../assets/images/pasta.jpg";

export const ProductPreviewCard = ({product, onAddProduct})=> {

    const addProduct = () =>{
        onAddProduct(product);
    }
    return(
            <div>        
            <h2 className="pb-2 text-lg">{product.name}</h2>
            <p className="mb-2 h-20 line-clamp-4">{product.description}</p>
            <AddProduct onAddProduct={addProduct} />
            </div>

    )
}