import { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Button, Table } from "antd";
import OwnModal from "./components/OwnModal";

const initialState = {
  id: null,
  name: "",
  age: "",
  course: "",
  phone: "",
};

function App(props) {
  // List Users
  const [users, setUsers] = useState([]);
  // User
  const [user, setUser] = useState(initialState);
  // Add Modal State
  const [addOpen, setAddOpen] = useState(false);
  // Edit Modal State
  const [editOpen, setEditOpen] = useState(false);
  // Id for add user
  const [id, setId] = useState(0);
  // EditId for change User
  const [editId, setEditId] = useState(null);

  // Open Add Modal
  const handleOpenAdd = () => {
    setAddOpen(true);
    setUser(initialState);
  };

  // Close Add Modal
  const handleCloseAdd = () => {
    setAddOpen(false);
    setUser(initialState);
  };

  // Edit Modal Open
  const handleOpenEdit = (id) => {
    setEditOpen(true);
    setEditId(id);
    setUser(users.filter((item) => item.id === id)[0]);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  // handleChange of Inputs
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Add User
  const addUser = () => {
    let addUser = { ...user };
    addUser.id = id + 1;
    setId(id + 1);
    setUsers((prev) => {
      return [...prev, addUser];
    });
    setAddOpen(false);
    setUser(initialState);
  };

  // Delete User
  const deleteUser = (id) => {
    const copy = [...users].filter((item) => item.id !== id);
    setUsers(copy);
  };

  // Edit User
  const editUser = () => {
    const editUsers = [...users].map((elem) => {
      if (elem.id === editId) {
        elem.name = user.name;
        elem.age = user.age;
        elem.course = user.course;
        elem.phone = user.phone;
        return elem;
      }
      return elem;
    });

    setUsers(editUsers);
    setEditOpen(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (elem) => {
        return <a>{elem}</a>;
      },
    },
    {
      title: "Delete",
      render: (elem) => {
        return <Button onClick={() => deleteUser(elem.id)}>Delete</Button>;
      },
    },
    {
      title: "Edit",
      render: (elem) => {
        return <Button onClick={() => handleOpenEdit(elem.id)}>Edit</Button>;
      },
    },
  ];
  return (
    <>
      {/* Add user */}
      <Button type="primary" onClick={handleOpenAdd}>
        Primary Button
      </Button>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={users}
        size="middle"
        pagination={false}
      />

      {/* Modal Add */}
      <OwnModal
        title="Add"
        open={addOpen}
        handleChange={handleChange}
        handleClose={handleCloseAdd}
        user={user}
        addEdit={addUser}
      />

      {/* Modal Edit */}
      <OwnModal
        title="Edit"
        open={editOpen}
        handleChange={handleChange}
        user={user}
        handleClose={handleCloseEdit}
        addEdit={editUser}
      />
    </>
  );
}

export default App;
