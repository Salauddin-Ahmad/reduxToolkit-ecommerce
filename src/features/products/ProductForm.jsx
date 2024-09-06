import { useState } from "react";


const ProductForm = () => {

    const [product, setProduct] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
    })

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(product)
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
                <textarea
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
                Add Product
            </button>

            <textarea>

            </textarea>
        </form>
    );
};

export default ProductForm;