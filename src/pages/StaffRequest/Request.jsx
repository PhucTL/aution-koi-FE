import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Request.css";

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
function Request() {
  const [auction, setAuction] = useState([
    {
      id: "",
      name: "",
      startTime: "",
      endTime: "",
    },
  ]);
  const [requests, setRequests] = useState([
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
    {
      breeder: "Aka Matsuba",
      fishName: "Showa",
      auctionMethod: 1,
      startPrice: "$150",
      buyoutPrice: "$150",
      time: "14/02/2025 20:00",
    },
    {
      breeder: "Yamabuki Ogon",
      fishName: "Asagi",
      auctionMethod: 1,
      startPrice: "$150",
      buyoutPrice: "$150",
      time: "14/02/2025 20:00",
    },
    {
      breeder: "Shiro Utsuri",
      fishName: "Shusui",
      auctionMethod: 1,
      startPrice: "$150",
      buyoutPrice: "$150",
      time: "14/02/2025 20:00",
    },
    {
      breeder: "Kohaku Hikari",
      fishName: "Bekko",
      auctionMethod: 1,
      startPrice: "$150",
      buyoutPrice: "$150",
      time: "14/02/2025 20:00",
    },
    {
      breeder: "Beni Kikokuryu",
      fishName: "Goshiki",
      auctionMethod: 1,
      startPrice: "$150",
      buyoutPrice: "$150",
      time: "14/02/2025 20:00",
    },
  ]);

  const [newAuction, setNewAuction] = useState({
    id: "",
    name: "",
    startTime: "",
    endTime: "",
  });
  const handleAuctionInput = (e) => {
    const [name, value] = e.target;
    setNewAuction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddAuction = () => {
    setAuction([...auction, { ...newAuction, id: auction.length + 1 }]);
    setNewAuction({
      id: "",
      name: "",
      startTime: "",
      endTime: "",
    });
    setShowAddModal(false);
  };

  const [showAddModal, setShowAddModal] = useState(false);

  const handleDeleteRequests = (breeder) => {
    const updatedRequest = requests.filter(
      (request) => request.breeder !== breeder
    );
    setRequests(updatedRequest);
  };
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Koi Breeder</th>
              <th>Fish Name</th>
              <th>Details</th>
              <th>Auction Method</th>
              <th>StartPrice</th>
              <th>BuyOut Price</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td>{request.breeder}</td>
                <td>{request.fishName}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
                <td>{request.auctionMethod}</td>
                <td>{request.startPrice}</td>
                <td>{request.buyoutPrice}</td>
                <td>{request.time}</td>
                <td className="action-icons">
                  <button
                    className="action-btn edit-btn"
                    onClick={() => setShowAddModal(true)}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDeleteRequests(request.breeder)}
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
        <h2>Add New Auction</h2>
        <input
          type="text"
          name="id"
          value={newAuction.id}
          onChange={handleAuctionInput}
          placeholder="ID"
        />
        <input
          type="text"
          name="name"
          value={newAuction.name}
          onChange={handleAuctionInput}
          placeholder="Name"
        />
        <input
          type="text"
          name="startTime"
          value={newAuction.startTime}
          onChange={handleAuctionInput}
          placeholder="StartTime"
        />
        <input
          type="text"
          name="endTime"
          value={newAuction.endTime}
          onChange={handleAuctionInput}
          placeholder="EndTime"
        />

        <button onClick={handleAddAuction}>Create Auction</button>
      </Modal>
    </div>
  );
}

export default Request;
