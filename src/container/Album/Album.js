import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import OwnModal from "../../components/OwnModal";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const initialAlbum = {
  id: null,
  img: "",
  title: "",
  desc: "",
};

const theme = createTheme();

export default function Album() {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState(initialAlbum);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(0);

  const handleAddOpen = () => {
    setAlbum(initialAlbum);
    setAddOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prev) => ({ ...prev, [name]: value }));
  };

  const addAlbum = () => {
    let newAlbum = { ...album };
    newAlbum.id = id + 1;
    setId(id + 1);
    setAlbums((prev) => [...prev, newAlbum]);
    setAddOpen(false);
  };

  const deleteAlbum = (id) => {
    const deletedAlbum = [...albums].filter((e) => e.id !== id);
    setAlbums(deletedAlbum);
  };

  const editModalOpen = (id) => {
    setEditId(id);
    setAlbum(albums.find((e) => e.id === id));
    setEditOpen(true);
  };

  const editAlbum = () => {
    const updateAlbums = [...albums].map((elem) => {
      if (elem.id === editId) {
        elem.img = album.img;
        elem.title = album.title;
        elem.desc = album.desc;
        return elem;
      }
      return elem;
    });

    setAlbums(updateAlbums);
    setEditOpen(false);
  };

  const viewAlbum = (id) => {
    setViewOpen(true);
    setAlbum(albums.find((e) => e.id === id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon
            sx={{ mr: 2 }}
            onClick={handleAddOpen}
            style={{ cursor: "pointer" }}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {albums.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia component="img" image={card.img} alt="random" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => viewAlbum(card.id)}>
                      View
                    </Button>
                    <Button size="small" onClick={() => editModalOpen(card.id)}>
                      Edit
                    </Button>
                    <Button size="small" onClick={() => deleteAlbum(card.id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      <OwnModal
        album={album}
        titleModal="Add"
        addEdit={addAlbum}
        handleChange={handleChange}
        handleClose={() => setAddOpen(false)}
        open={addOpen}
      />
      <OwnModal
        album={album}
        titleModal="Edit"
        addEdit={editAlbum}
        open={editOpen}
        handleClose={() => setEditOpen(false)}
        handleChange={handleChange}
      />
      <OwnModal
        album={album}
        titleModal="View"
        isView={true}
        open={viewOpen}
        handleClose={() => setViewOpen(false)}
      />

      {/* End footer */}
    </ThemeProvider>
  );
}
