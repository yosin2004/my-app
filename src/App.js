import GetRequest from "./api/GetRequest";
import PostRequest from "./api/PostRequest";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});

  const getSingleUser = async () => {
    try {
      const { data } = await axios.get("https://reqres.in/api/users/2");

      setUser(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <>
      <div className="container">
        <PostRequest />
        <GetRequest />
        <p>id: {user.id}</p>
        <p>email: {user.email}</p>
        <p>first name: {user.first_name}</p>
        <p>last_name: {user.last_name}</p>
        <p>
          avatar: <img src={user.avatar} alt="avatar" />
        </p>
      </div>
    </>
  );
}

export default App;
