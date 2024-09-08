import { useState } from "react";
import ProductForm from "./features/products/ProductForm";
import ProductListView from "./features/products/ProductListView";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [producToEdit, setProductToEdit] = useState({});

  const onHandleSetProductToEdit = (product) => {
    setProductToEdit(product)
    setIsEdit(true)
  }
  const resetForm = () => {
    setIsEdit(false)
    setProductToEdit({})
  }
  return (
    <div>
      <div>
        <ProductForm
          producToEdit={producToEdit}
          isEdit={isEdit}
          resetForm={resetForm}
        />
        <ProductListView
          onHandleSetProductToEdit={onHandleSetProductToEdit} />
      </div>
    </div>
  );
};

export default App;