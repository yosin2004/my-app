import React, { useEffect, useState } from "react";
import axios from "axios";

function GetRequest() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");

      console.log(response);
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.email}</td>
                <td>{elem.first_name}</td>
                <td>{elem.last_name}</td>
                <td>
                  <img src={elem.avatar} alt="avatar" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GetRequest;
