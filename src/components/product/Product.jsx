import "./product.css";

const Product = ({img,link,title}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <h3>{title}</h3>
        
      </a>
    </div>
  );
};

export default Product;
