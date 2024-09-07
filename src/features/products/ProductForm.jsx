import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "./productSlice";


const ProductForm = ({producToEdit = {}, isEdit = false}) => {
    console.log(producToEdit)
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        title: producToEdit.id || '',
        price: producToEdit.price || '',
        description: producToEdit.description || '',
        category: producToEdit.category || '',
    })

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createProduct({...product, id: nanoid() }))

        console.log({...product, id: nanoid()})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Price</label>
                <input
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Category</label>
                <input
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">
                {isEdit ? "Update Product" : "Edit Product"}
            </button>
        </form>
            
    );
};

export default ProductForm;