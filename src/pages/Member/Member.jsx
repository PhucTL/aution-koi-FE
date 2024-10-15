import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./Member.module.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalsContent}>
        <button className={styles.closeModal} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: "456 Maple Ave, Somewhere, USA",
    },
  ]);

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleEditUser = (user) => {
    setEditForm(user);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    const updatedUsers = users.map((user) =>
      user.id === editForm.id ? editForm : user
    );
    setUsers(updatedUsers);
    setShowModal(false);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className={styles.actionBtn + " " + styles.editBtn}
                    onClick={() => handleEditUser(user)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className={styles.actionBtn + " " + styles.deleteBtn}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Edit Breeder</h2>
        <input
          type="text"
          name="name"
          value={editForm.name}
          onChange={handleInputChange}
          placeholder="Name"
          className={styles.roundedInput}
        />
        <input
          type="email"
          name="email"
          value={editForm.email}
          onChange={handleInputChange}
          placeholder="Email"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="phone"
          value={editForm.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="address"
          value={editForm.address}
          onChange={handleInputChange}
          placeholder="Address"
          className={styles.roundedInput}
        />
        <button className="btn btn-danger" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </Modal>
    </div>
  );
}

export default User;
