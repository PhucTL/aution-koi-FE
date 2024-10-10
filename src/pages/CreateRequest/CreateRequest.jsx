import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import "./CreateRequest.css";

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
      <button className="toggle-form-btn" onClick={() => setShowAddModal(true)}>
        Create New Request
      </button>

      <div className="table-container">
        <table>
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
                    className="action-btn edit-btn"
                    onClick={() => handleEditRequest(request)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                  <button
                    className="action-btn delete-btn"
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

      <Modal show={showAddModal} onClose={() => setShowAddModal(false)}>
        <h2>Create New Request</h2>

        <div className="form-container">
          <div className="left-column">
            <div className="import-box">
              <label htmlFor="importImage">Import Image</label>
              <input type="file" id="importImage" accept="image/*" />
            </div>
            <div className="import-box">
              <label htmlFor="importVideo">Import Video</label>
              <input type="file" id="importVideo" accept="video/*" />
            </div>
          </div>

          <div className="right-column">
            <input
              type="text"
              name="fishName"
              value={newRequest.fishName}
              onChange={handleAddInputChange}
              placeholder="Fish Name"
              className="rounded-input"
            />

            <select
              name="method"
              value={newRequest.method}
              onChange={handleAddInputChange}
              className="rounded-input"
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
              className="rounded-input"
            />

            <input
              type="text"
              name="buyOutPrice"
              value={newRequest.buyOutPrice}
              onChange={handleAddInputChange}
              placeholder="Buy Out Price"
              className="rounded-input"
            />

            <input
              type="datetime-local"
              name="startTime"
              value={newRequest.startTime}
              onChange={handleAddInputChange}
              className="rounded-input"
            />

            <input
              type="datetime-local"
              name="endTime"
              value={newRequest.endTime}
              onChange={handleAddInputChange}
              className="rounded-input"
            />

            <button onClick={handleAddRequest}>Create Request</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateRequest;
