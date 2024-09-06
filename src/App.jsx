import ProductForm from "./features/products/ProductForm";
import ProductListView from "./features/products/ProductListView";

const App = () => {
  return (
    <div>
      <div>
        <ProductForm/>
        <ProductListView />
      </div>
    </div>
  );
};

export default App;