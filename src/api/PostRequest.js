import React from "react";
import axios from "axios";

function PostRequest() {
  const addUser = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/users", {
        name: "John",
        job: "Doe",
      });
      alert(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="button" onClick={addUser}>
        add
      </button>
    </div>
  );
}

export default PostRequest;
