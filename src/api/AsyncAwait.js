import React, { useState } from "react";
import { useEffect } from "react";

function AsyncAwait() {
  const [user, setUser] = useState({});

  const getSimpleData = async () => {
    try {
      const response = await fetch("http://localhost:3000/simple.json");
      const data = await response.json();
      console.log(response, "response");
      console.log(data, "data");
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSimpleData();
  }, []);

  return (
    <div>
      <p>firstName: {user.firstName}</p>
      <p>lastName: {user.lastName}</p>
      <p>age: {user.age}</p>
    </div>
  );
}

export default AsyncAwait;
