import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../Components/Sidebar";
import TableHOC from "../Components/TableHOC";
import { Column } from "react-table";

interface DataType {
  photo: string;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },

  {
    Header: "Name",
    accessor: "name",
  },

  {
    Header: "Price",
    accessor: "price",
  },

  {
    Header: "Stock",
    accessor: "stock",
  },

  {
    Header: "Action",
    accessor: "action",
  },
];

const Product = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Products"),
    []
  );

  return (
    <div className="admin-container">
      <Sidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Product;
