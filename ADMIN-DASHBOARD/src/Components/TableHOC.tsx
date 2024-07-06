import { useTable, Column } from "react-table";
function TableHOC<T extends Object>(
  data T[],
  colums: <T> Column[],
  containerClassName: string,
  heading: string
) {
  return function HOC() {};
}

export default TableHOC;
