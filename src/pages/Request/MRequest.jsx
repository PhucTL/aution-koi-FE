import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Request.css";

// Simulating the auction data
const auction = [
  {
    AutionID: "1",
    FishName: "Kohaku",
    Method: "1",
    StartPrice: "150$",
    BuyOutPrice: "200$",
    StartTime: "30/10/2024",
    EndTime: "31/10/2024",
  },
];

const requests = [
  {
    breeder: "Sakura Ginnin",
    fishName: "Kohaku",
    auctionMethod: 1,
    startPrice: "$150",
    buyoutPrice: "$150",
    time: "14/02/2025 20:00",
  },
  {
    breeder: "Midori Showa",
    fishName: "Taisho Sanke",
    auctionMethod: 1,
    startPrice: "$150",
    buyoutPrice: "$150",
    time: "14/02/2025 20:00",
  },
  // other requests...
];

function Request() {
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
    AutionID: "",
    FishName: "",
    Method: "",
    StartPrice: "",
    BuyOutPrice: "",
    StartTime: "",
    EndTime: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleEditAuction = (auction) => {
    setEditForm(auction);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    const updatedAuction = auction.map((auction) =>
      auction.AutionID === editForm.AutionID ? editForm : auction
    );
    setUsers(updatedAuction); // You should update the state here (if needed)
    setShowModal(false);
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Auction Details</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td>{request.breeder}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => handleEditAuction(auction[0])} // Edit auction for first entry (for example)
                  >
                    View
                  </button>
                </td>
                <td>{request.time}</td>
                <td className="action-icons">
                  <FontAwesomeIcon icon={faArrowRight} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Auction Details</h2>
        <input
          type="text"
          name="AutionID"
          value={editForm.AutionID}
          onChange={handleInputChange}
          placeholder="AuctionID"
        />
        <input
          type="text"
          name="FishName"
          value={editForm.FishName}
          onChange={handleInputChange}
          placeholder="Fish Name"
        />
        <input
          type="text"
          name="Method"
          value={editForm.Method}
          onChange={handleInputChange}
          placeholder="Method"
        />
        <input
          type="text"
          name="StartPrice"
          value={editForm.StartPrice}
          onChange={handleInputChange}
          placeholder="Start Price"
        />
        <input
          type="text"
          name="BuyOutPrice"
          value={editForm.BuyOutPrice}
          onChange={handleInputChange}
          placeholder="BuyOut Price"
        />
        <input
          type="text"
          name="StartTime"
          value={editForm.StartTime}
          onChange={handleInputChange}
          placeholder="Start Time"
        />
        <input
          type="text"
          name="EndTime"
          value={editForm.EndTime}
          onChange={handleInputChange}
          placeholder="End Time"
        />
        <button onClick={handleSaveChanges}>Save Changes</button>
      </Modal>
    </div>
  );
}

export default Request;
