import { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import OwnModal from "./components/OwnModal";
import Table from "./components/Table/Table";
import Thead from "./components/Table/Thead/Thead";
import Tbody from "./components/Table/Tbody/Tbody";
import Tr from "./components/Table/Tr/Tr";
import Th from "./components/Table/Th/Th";
import Td from "./components/Table/Td/Td";

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

  return (
    <>
      {/* Add user */}

      {/* Table */}
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Course</Th>
            <Th>Phone</Th>
            <Th>Delete</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((elem) => {
            return (
              <Tr key={elem.id}>
                <Td>{elem.id}</Td>
                <Td>{elem.name}</Td>
                <Td>{elem.age}</Td>
                <Td>{elem.course}</Td>
                <Td>{elem.phone}</Td>
                <Td>
                  <button>del</button>
                </Td>
                <Td>
                  <button>edit</button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {/* Modal Add */}

      {/* Modal Edit */}
    </>
  );
}

export default App;
