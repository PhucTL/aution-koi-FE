import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./ManageStaff.module.css";
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
function ManageStaff() {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Anytown, USA",
      password: "123",
      position: "Manager",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      address: "456 Maple Ave, Somewhere, USA",
      password: "123",
      position: "Staff",
    },
  ]);

  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    position: "",
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleEditStaff = (member) => {
    setEditForm(member);
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    const updatedStaff = staff.map((member) =>
      member.id === editForm.id ? editForm : member
    );
    setStaff(updatedStaff);
    setShowEditModal(false);
  };

  const [newStaff, setNewStaff] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    position: "",
  });

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddStaff = () => {
    setStaff([...staff, { ...newStaff, id: staff.length + 1 }]);

    setNewStaff({
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      position: "",
    });
    setShowAddModal(false);
  };

  const handleDeleteStaff = (id) => {
    const updatedStaff = staff.filter((member) => member.id !== id);
    setStaff(updatedStaff);
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
            {staff.map((member, index) => (
              <tr key={index}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
                <td>
                  <button
                    className={styles.actionBtn + " " + styles.editBtn}
                    onClick={() => handleEditStaff(member)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className={styles.actionBtn + " " + styles.deleteBtn}
                    onClick={() => handleDeleteStaff(member.id)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className={styles.buttonkoi + " btn btn-danger"}
        onClick={() => setShowAddModal(true)}
      >
        Add New Staff
      </button>

      <Modal show={showAddModal} onClose={() => setShowAddModal(false)}>
        <h2>Add New Staff</h2>
        <input
          type="text"
          name="name"
          value={newStaff.name}
          onChange={handleAddInputChange}
          placeholder="Name"
          className={styles.roundedInput}
        />
        <input
          type="email"
          name="email"
          value={newStaff.email}
          onChange={handleAddInputChange}
          placeholder="Email"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="phone"
          value={newStaff.phone}
          onChange={handleAddInputChange}
          placeholder="Phone"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="address"
          value={newStaff.address}
          onChange={handleAddInputChange}
          placeholder="Address"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="password"
          value={newStaff.password}
          onChange={handleAddInputChange}
          placeholder="Password"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="position"
          value={newStaff.position}
          onChange={handleAddInputChange}
          placeholder="Position"
          className={styles.roundedInput}
        />
        <button className="btn btn-danger" onClick={handleAddStaff}>
          Add Staff
        </button>
      </Modal>

      <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
        <h2>Edit Staff</h2>
        <input
          type="text"
          name="name"
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          placeholder="Name"
          className={styles.roundedInput}
        />
        <input
          type="email"
          name="email"
          value={editForm.email}
          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
          placeholder="Email"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="phone"
          value={editForm.phone}
          onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
          placeholder="Phone"
          className={styles.roundedInput}
        />
        <input
          className={styles.roundedInput}
          type="text"
          name="address"
          value={editForm.address}
          onChange={(e) =>
            setEditForm({ ...editForm, address: e.target.value })
          }
          placeholder="Address"
        />
        <button className="btn btn-danger" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </Modal>
    </div>
  );
}

export default ManageStaff;
