import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Request.module.css";

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
];

function Request() {
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
    setUsers(updatedAuction);
    setShowModal(false);
  };
  <Modal show={showModal} onClose={() => setShowModal(false)}>
    <h2>Auction Details</h2>
    <input
      type="text"
      name="AutionID"
      value={editForm.AutionID}
      onChange={handleInputChange}
      placeholder="AuctionID"
      className={styles.roundedInput}
    />
    <input
      type="text"
      name="FishName"
      value={editForm.FishName}
      onChange={handleInputChange}
      placeholder="Fish Name"
      className={styles.roundedInput}
    />
    <input
      type="text"
      name="Method"
      value={editForm.Method}
      onChange={handleInputChange}
      placeholder="Method"
      className={styles.roundedInput}
    />
    <input
      type="text"
      name="StartPrice"
      value={editForm.StartPrice}
      onChange={handleInputChange}
      placeholder="Start Price"
      className={styles.roundedInput}
    />
    <input
      type="text"
      name="BuyOutPrice"
      value={editForm.BuyOutPrice}
      onChange={handleInputChange}
      placeholder="BuyOut Price"
      className={styles.roundedInput}
    />
    <input
      type="text"
      name="StartTime"
      value={editForm.StartTime}
      onChange={handleInputChange}
      placeholder="Start Time"
      className={styles.roundedInput}
    />
    <input
      type="text"
      name="EndTime"
      value={editForm.EndTime}
      onChange={handleInputChange}
      placeholder="End Time"
      className={styles.roundedInput}
    />
    <button className="btn btn-danger" onClick={handleSaveChanges}>
      Save Changes
    </button>
  </Modal>;

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
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
                    className={styles.viewBtn}
                    onClick={() => handleEditAuction(auction[0])}
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
    </div>
  );
}

export default Request;
