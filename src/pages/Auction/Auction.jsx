import React, { useState } from "react";
import styles from "./Auction.module.css";

function Auction() {
  const [auctions, setAuctions] = useState([
    {
      name: "John Carter",
      status: "ACTIVE",
      startDate: "14/02/2025 20:00",
      endDate: "14/02/2025 20:00",
    },
    {
      name: "Emily Nguyen",
      status: "ACTIVE",
      startDate: "14/02/2025 20:00",
      endDate: "14/02/2025 20:00",
    },
    {
      name: "Michael Thompson",
      status: "ACTIVE",
      startDate: "14/02/2025 20:00",
      endDate: "14/02/2025 20:00",
    },
    {
      name: "Sophia Lee",
      status: "ACTIVE",
      startDate: "14/02/2025 20:00",
      endDate: "14/02/2025 20:00",
    },
    {
      name: "David Johnson",
      status: "END",
      startDate: "14/02/2025 20:00",
      endDate: "14/02/2025 20:00",
    },
  ]);

  return (
    <div className={styles.tableContainer}>
      <h1>Auctions</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Start date and time</th>
            <th>End date and time</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction, index) => (
            <tr key={index}>
              <td>{auction.name}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    auction.status === "ACTIVE"
                      ? styles.statusActive
                      : styles.statusEnd
                  }`}
                >
                  {auction.status}
                </span>
              </td>
              <td>{auction.startDate}</td>
              <td>{auction.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Auction;
