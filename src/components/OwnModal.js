import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function OwnModal(props) {
  const {
    open,
    handleClose,
    titleModal,
    album,
    handleChange,
    addEdit,
    isView = false,
  } = props;
  const { img, title, desc } = album;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titleModal}</DialogTitle>
        <DialogContent>
          {isView ? (
            <>
              <img src={img} alt="img" />
              <p>{title}</p>
              <p>{desc}</p>
            </>
          ) : (
            <>
              <div style={{ margin: 5 }}>
                <TextField
                  label="img"
                  name="img"
                  value={img}
                  onChange={handleChange}
                />
              </div>
              <div style={{ margin: 5 }}>
                <TextField
                  label="title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div style={{ margin: 5 }}>
                <TextField
                  label="desc"
                  name="desc"
                  value={desc}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          {isView ? (
            <>
              <Button onClick={handleClose}>Close</Button>
            </>
          ) : (
            <>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={addEdit} autoFocus>
                Agree
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default OwnModal;
