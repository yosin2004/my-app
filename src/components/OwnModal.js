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
    hero,
    handleChange,
    addEdit,
    isView = false,
  } = props;
  const { img, name, role } = hero;

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
              <p>{name}</p>
              <p>{role}</p>
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
                  label="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div style={{ margin: 5 }}>
                <TextField
                  label="role"
                  name="role"
                  value={role}
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
