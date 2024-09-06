import { useEffect } from "react";
import { deleteProduct, fetchProducts } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductListView = () => {
    const { products, isLoading, error } = useSelector(
        (state) => state.productsR
    );

    console.log(products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);


    return <div >
        {isLoading && <p>Laoding ...</p>}

        {error && <p>{error}</p>}
        <div className="products">
            {!isLoading && !error && products && products.length > 0 ?
                (products.map((product) => {
                    return <article key={product.id} className="product">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: {product.price}</p>
                        
                        <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                    </article>
                }))
                : (
                    <p> No Products available</p>
                )
            }
        </div>

    </div>


};

export default ProductListView;