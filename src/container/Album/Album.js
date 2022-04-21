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

const initialState = {
  id: null,
  name: "",
  role: "",
  image: ""
}

const theme = createTheme();

export default function Album() {

  const [hero, setHero] = useState(initialState)
  const [heroes, setHeroes] = useState([])
  const [addOpen, setAddOpen] = useState(false)
  const [id, setId] = useState(0)
  const [editId, setEditId] = useState(0)
        
  const handleAddOpen = () => {
    setAddOpen(true)
  }    
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setHero((prev) => ({...prev, [name]: value}))
  }
    
  const addHero = () => {
    let newHero = {...hero}
    newHero.id = id + 1
    setId(id + 1)
    setHeroes((prev) => [...prev, newHero])
    setAddOpen(false)
  }
  const deletHero = (id) => {
    const deletedHero = [...heroes].filter((e) => e.id !==id)
    setHeroes(deletedHero)
    setHero(initialState)
  }
  const editHero = () => {
    const updateHero = [...heroes].map((e) => {
      if(e.id === editId){
        e.image === hero.image;
        e.name === hero.name;
        e.role === hero.role;
      }
      return e
    })
  }

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
            Album 
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {heroes.map((card) => (
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
                      {card.name}
                    </Typography>
                    <Typography>{card.role}</Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" onClick={() => viewAlbum(card.id)}>
                      View
                    </Button>
                    <Button size="small" onClick={() => editModalOpen(card.id)}>
                      Edit
                    </Button> */}
                    <Button size="small" onClick={() => deletHero(card.id)}>
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
        hero={hero}
        titleModal="Add"
        addEdit={addHero}
        handleChange={handleChange}
        handleClose={() => setAddOpen(false)}
        open={addOpen}
      />
      {/* <OwnModal
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
      /> */}

      {/* End footer */}
    </ThemeProvider>
  );
}
