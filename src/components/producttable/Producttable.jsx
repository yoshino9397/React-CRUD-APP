import "./producttable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Producttable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // LISTEN
    const fetchData = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      fetchData();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="producttable">
      <div className="producttableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Producttable;
