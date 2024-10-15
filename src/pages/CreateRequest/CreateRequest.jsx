import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./CreateRequest.module.css";
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
function CreateRequest() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      fishName: "Goldfish",
      method: "Auction",
      startPrice: "100",
      buyOutPrice: "200",
      startTime: "2024-10-01T10:00",
      endTime: "2024-10-01T15:00",
    },
    {
      id: 2,
      fishName: "Betta",
      method: "Buy Now",
      startPrice: "150",
      buyOutPrice: "300",
      startTime: "2024-10-02T12:00",
      endTime: "2024-10-02T17:00",
    },
    {
      id: 2,
      fishName: "Betta",
      method: "Buy Now",
      startPrice: "150",
      buyOutPrice: "300",
      startTime: "2024-10-02T12:00",
      endTime: "2024-10-02T17:00",
    },
    {
      id: 2,
      fishName: "Betta",
      method: "Buy Now",
      startPrice: "150",
      buyOutPrice: "300",
      startTime: "2024-10-02T12:00",
      endTime: "2024-10-02T17:00",
    },
    {
      id: 2,
      fishName: "Betta",
      method: "Buy Now",
      startPrice: "150",
      buyOutPrice: "300",
      startTime: "2024-10-02T12:00",
      endTime: "2024-10-02T17:00",
    },
    {
      id: 2,
      fishName: "Betta",
      method: "Buy Now",
      startPrice: "150",
      buyOutPrice: "300",
      startTime: "2024-10-02T12:00",
      endTime: "2024-10-02T17:00",
    },
    {
      id: 2,
      fishName: "Betta",
      method: "Buy Now",
      startPrice: "150",
      buyOutPrice: "300",
      startTime: "2024-10-02T12:00",
      endTime: "2024-10-02T17:00",
    },
  ]);

  const [editForm, setEditForm] = useState({
    id: "",
    fishName: "",
    method: "",
    startPrice: "",
    buyOutPrice: "",
    startTime: "",
    endTime: "",
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleEditRequest = (request) => {
    setEditForm(request);
    setShowEditModal(true);
  };

  const handleSaveChanges = () => {
    const updatedRequests = requests.map((request) =>
      request.id === editForm.id ? editForm : request
    );
    setRequests(updatedRequests);
    setShowEditModal(false);
  };

  const [newRequest, setNewRequest] = useState({
    id: "",
    fishName: "",
    method: "",
    startPrice: "",
    buyOutPrice: "",
    startTime: "",
    endTime: "",
  });

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddRequest = () => {
    setRequests([...requests, { ...newRequest, id: requests.length + 1 }]);

    setNewRequest({
      id: "",
      fishName: "",
      method: "",
      startPrice: "",
      buyOutPrice: "",
      startTime: "",
      endTime: "",
    });
    setShowAddModal(false);
  };

  const handleDeleteRequest = (id) => {
    const updatedRequests = requests.filter((request) => request.id !== id);
    setRequests(updatedRequests);
  };

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fish Name</th>
              <th>Method</th>
              <th>Start Price</th>
              <th>Buy Out Price</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td>{request.id}</td>
                <td>{request.fishName}</td>
                <td>{request.method}</td>
                <td>{request.startPrice}</td>
                <td>{request.buyOutPrice}</td>
                <td>{request.startTime}</td>
                <td>{request.endTime}</td>
                <td>
                  <button
                    className={styles.actionBtn + " " + styles.editBtn}
                    onClick={() => handleEditRequest(request)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className={styles.actionBtn + " " + styles.deleteBtn}
                    onClick={() => handleDeleteRequest(request.id)}
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
        Create New Request
      </button>

      <Modal show={showAddModal} onClose={() => setShowAddModal(false)}>
        <h2>Create New Request</h2>
        <div className={styles.formContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.importBox}>
              <label htmlFor="importImage">Import Image</label>
              <input type="file" id="importImage" accept="image/*" />
            </div>
            <div className={styles.importBox}>
              <label htmlFor="importVideo">Import Video</label>
              <input type="file" id="importVideo" accept="video/*" />
            </div>
          </div>

          <div className={styles.rightColumn}>
            <input
              type="text"
              name="fishName"
              value={newRequest.fishName}
              onChange={handleAddInputChange}
              placeholder="Fish Name"
              className={styles.roundedInput}
            />

            <select
              name="method"
              value={newRequest.method}
              onChange={handleAddInputChange}
              className={styles.roundedInput}
            >
              <option value="" disabled>
                Select Method
              </option>
              <option value="Auction">Auction</option>
              <option value="Buy Now">Buy Now</option>
            </select>

            <input
              type="text"
              name="startPrice"
              value={newRequest.startPrice}
              onChange={handleAddInputChange}
              placeholder="Start Price"
              className={styles.roundedInput}
            />

            <input
              type="text"
              name="buyOutPrice"
              value={newRequest.buyOutPrice}
              onChange={handleAddInputChange}
              placeholder="Buy Out Price"
              className={styles.roundedInput}
            />

            <input
              type="datetime-local"
              name="startTime"
              value={newRequest.startTime}
              onChange={handleAddInputChange}
              className={styles.roundedInput}
            />

            <input
              type="datetime-local"
              name="endTime"
              value={newRequest.endTime}
              onChange={handleAddInputChange}
              className={styles.roundedInput}
            />

            <button className=" btn btn-danger" onClick={handleAddRequest}>
              Create Request
            </button>
          </div>
        </div>
      </Modal>
      <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
        <h2>Edit Request</h2>
        <input
          type="text"
          name="id"
          value={editForm.id}
          onChange={(e) => setEditForm({ ...editForm, id: e.target.value })}
          placeholder="ID"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="fishname"
          value={editForm.fishName}
          onChange={(e) =>
            setEditForm({ ...editForm, fishName: e.target.value })
          }
          placeholder="Fish Name"
          className={styles.roundedInput}
        />
        <input
          type="text"
          name="method"
          value={editForm.method}
          onChange={(e) => setEditForm({ ...editForm, method: e.target.value })}
          placeholder="Method"
          className={styles.roundedInput}
        />
        <input
          className={styles.roundedInput}
          type="text"
          name="startPrice"
          value={editForm.startPrice}
          onChange={(e) =>
            setEditForm({ ...editForm, startPrice: e.target.value })
          }
          placeholder="Start Price"
        />
        <input
          className={styles.roundedInput}
          type="text"
          name="buyOutPrice"
          value={editForm.buyOutPrice}
          onChange={(e) =>
            setEditForm({ ...editForm, buyOutPrice: e.target.value })
          }
          placeholder="Buy Out Price"
        />
        <input
          className={styles.roundedInput}
          type="text"
          name="startTime"
          value={editForm.startTime}
          onChange={(e) =>
            setEditForm({ ...editForm, startTime: e.target.value })
          }
          placeholder="Start Time"
        />
        <input
          className={styles.roundedInput}
          type="text"
          name="endTime"
          value={editForm.endTime}
          onChange={(e) =>
            setEditForm({ ...editForm, endTime: e.target.value })
          }
          placeholder="End Time"
        />
        <button className="btn btn-danger" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </Modal>
    </div>
  );
}

export default CreateRequest;
