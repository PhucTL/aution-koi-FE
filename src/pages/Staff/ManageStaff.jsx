import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import "./ManageStaff.css";

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

  const Modal = ({ show, onClose, children }) => {
    if (!show) {
      return null;
    }
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-modal" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

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
      <button className="toggle-form-btn" onClick={() => setShowAddModal(true)}>
        Add New Staff
      </button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Password</th>
              <th>Position</th>
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
                <td>{member.password}</td>
                <td>{member.position}</td>
                <td>
                  <button
                    className="action-btn edit-btn"
                    onClick={() => handleEditStaff(member)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className="action-btn delete-btn"
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

      <Modal show={showAddModal} onClose={() => setShowAddModal(false)}>
        <h2>Add New Staff</h2>
        <input
          type="text"
          name="name"
          value={newStaff.name}
          onChange={handleAddInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={newStaff.email}
          onChange={handleAddInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={newStaff.phone}
          onChange={handleAddInputChange}
          placeholder="Phone"
        />
        <input
          type="text"
          name="address"
          value={newStaff.address}
          onChange={handleAddInputChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="password"
          value={newStaff.password}
          onChange={handleAddInputChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="position"
          value={newStaff.position}
          onChange={handleAddInputChange}
          placeholder="Position"
        />
        <button onClick={handleAddStaff}>Add Staff</button>
      </Modal>

      <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
        <h2>Edit Staff</h2>
        <input
          type="text"
          name="name"
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={editForm.email}
          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={editForm.phone}
          onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
          placeholder="Phone"
        />
        <input
          type="text"
          name="address"
          value={editForm.address}
          onChange={(e) =>
            setEditForm({ ...editForm, address: e.target.value })
          }
          placeholder="Address"
        />
        <button onClick={handleSaveChanges}>Save Changes</button>
      </Modal>
    </div>
  );
}

export default ManageStaff;
