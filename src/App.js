import { useState } from "react";
import "./App.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";

function App() {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(0);

  const handleAddOpen = () => {
    setAddOpen(true);
    setText("");
  };

  const handleAddClose = () => {
    setAddOpen(false);
  };

  const handleEditOpen = (index) => {
    setEditOpen(true);
    setEditIndex(index);
    setText(todos[index].text);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const addTodo = () => {
    if (text === "") return;

    setTodos((prev) => {
      return [
        ...prev,
        {
          text: text,
          isCompleted: false,
        },
      ];
    });
    setText("");
    setAddOpen(false);
  };

  const editTodo = () => {
    if (text === "") return;
    let todo = [...todos];

    todo[editIndex].text = text;

    setTodos(todo);
    setEditOpen(false);
  };

  const deleteTodo = (index) => {
    let todo = [...todos];
    todo.splice(index, 1);

    setTodos(todo);
  };

  const completeTodo = (index) => {
    let todo = [...todos];

    todo[index].isCompleted = todo[index].isCompleted ? false : true;

    setTodos(todo);
  };

  return (
    <>
      <Button
        onClick={handleAddOpen}
        color="success"
        variant="contained"
        startIcon={<Add />}
        style={{ marginBottom: 10 }}
      >
        Add
      </Button>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Text</TableCell>
              <TableCell>Complete</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((elem, index) => (
              <TableRow key={index}>
                <TableCell
                  style={
                    elem.isCompleted ? { textDecoration: "line-through" } : {}
                  }
                >
                  {elem.text}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => completeTodo(index)} color="info">
                    <CheckIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => deleteTodo(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEditOpen(index)}
                    color="warning"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table */}

      {/* Dialog Add */}
      <Dialog open={addOpen} onClose={handleAddClose}>
        <DialogTitle>Добавление</DialogTitle>
        <DialogContent>
          <TextField
            label="Text"
            onChange={handleChange}
            value={text}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose}>Отмена</Button>
          <Button onClick={addTodo} autoFocus>
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Add */}

      {/* Dialog Edit */}
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Изменение</DialogTitle>
        <DialogContent>
          <TextField
            label="Text"
            onChange={handleChange}
            value={text}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Отмена</Button>
          <Button onClick={editTodo} autoFocus>
            Изменить
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog Edit */}
    </>
  );
}

export default App;
