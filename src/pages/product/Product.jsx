import "./product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Producttable from "../../components/producttable/Producttable";


const Product = () => {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <Producttable/>
      </div>
    </div>
  );
};

export default Product;
