import React from "react";
import { Link } from "react-router-dom";

function Rows({ id, name, owner }) {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>08-08-2020</td>
        <td>{owner}</td>
        <td>
          <Link to={"/View/" + id}>
            View
          </Link>
        </td>
      </tr>
    </tbody>
  );
}

export default Rows;
