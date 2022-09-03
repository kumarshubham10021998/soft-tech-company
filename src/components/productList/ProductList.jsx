import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title text-primary">
          Start Learning From The Best
          Our Top Courses</h1>
        
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} title={item.title}/>
          
        ))}
        
      </div>
    </div>
  );
};

export default ProductList;
