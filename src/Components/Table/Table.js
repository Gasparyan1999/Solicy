import { useEffect, useState } from "react";
import Rows from "../Rows";
import { dataReq } from "../Requests/Request";
import "./table.scss";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userRequest();
  }, []);

  const userRequest = async () => {
    try {
      await dataReq.get("/").then((res) => {
        setUsers(res.data);
      });
    } catch {
      return Error;
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created On</th>
          <th>Owner</th>
          <th>Action</th>
        </tr>
      </thead>
      {users.map((elem) => {
        return (
          <Rows
            key={elem.id}
            id={elem.id}
            name={elem.name}
            owner={elem.username}
          />
        );
      })}
    </table>
  );
}

export default Table;
