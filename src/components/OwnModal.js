import { Modal, Input } from "antd";

function OwnModal(props) {
  const { open, handleClose, title, send, user, handleChange, addEdit } = props;
  const { name, age, course, phone } = user;

  return (
    <>
      <Modal title={title} visible={open} onOk={addEdit} onCancel={handleClose}>
        <Input
          placeholder="Name"
          value={name}
          onChange={handleChange}
          name="name"
        />
        <hr />
        <Input
          placeholder="Age"
          value={age}
          onChange={handleChange}
          name="age"
        />
        <hr />
        <Input
          placeholder="Course"
          value={course}
          onChange={handleChange}
          name="course"
        />
        <hr />
        <Input
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
          name="phone"
        />
      </Modal>
    </>
  );
}

export default OwnModal;
