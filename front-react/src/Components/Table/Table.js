import React from "react";
import "./Table.scss";

const Table = ({ headers, data, onEditClick, onDeleteClick, setAccount }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th colSpan="2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
            <td>
              <button onClick={() => {
                onEditClick();
                setAccount(row)
              }}>Editar</button>
              <button onClick={onDeleteClick}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
