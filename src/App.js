import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
import Button from "@mui/material/Button";
import Modal from "./components/Modal";

const initialState = {
  id: null,
  name: "",
  age: null,
  course: "",
  phone: "",
};

function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(initialState);
  const [addOpen, setAddOpen] = useState(false);
  const [id, setId] = useState(0);

  const handleOpenAdd = () => {
    setAddOpen(true);
    setUser(initialState);
  };

  const handleCloseAdd = () => {
    setAddOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addUser = () => {
    let addUser = { ...user };
    addUser.id = id + 1;
    setId(id + 1);
    setUsers((prev) => {
      return [...prev, addUser];
    });
    setAddOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ marginBottom: 10 }}
        onClick={handleOpenAdd}
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.course}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal Add */}
      <Modal
        open={addOpen}
        handleClose={handleCloseAdd}
        title="Add User"
        handleChange={handleChange}
        send="add"
        addEdit={addUser}
        user={user}
      />
    </>
  );
}

export default App;
