import { useTable, Column, TableOptions } from "react-table";

function TableHOC<T extends Object>(
  data: T[],
  columns: Column<T>[],
  containerClassName: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };

    const { getTableProps, getTableBodyProps, rows, headerGroups, prepareRow } =
      useTable(options);

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table>
          <thead>
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <th {...column.getHeaderProps}>{column.render("herader")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
