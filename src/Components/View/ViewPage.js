import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataReq } from "../Requests/Request";
import "./viewPage.scss";

function ViewPage() {
  const [user, setUser] = useState([]);
  let elemId = useParams();

  useEffect(() => {
    userRequest();
  }, []);

  const userRequest = async () => {
    try {
      await dataReq.get(`/${elemId.id}`).then((res) => {
        setUser(res.data);
      });
    } catch(error) {
      console.error(error)
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{user.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{user.name}</td>
        </tr>
        <tr>
          <th>Owner</th>
          <td>{user.username}</td>
        </tr>
        <tr>
          <th>Created On</th>
          <td>08-08-2020</td>
        </tr>
        <tr>
          <th>Updated On</th>
          <td>05-05-2021</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ViewPage;
