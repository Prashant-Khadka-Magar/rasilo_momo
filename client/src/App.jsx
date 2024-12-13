import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>Rasilo MoMo</h1>
      <p>Coming Soon...</p>
      <div className="order-section">
        <p>In the meantime, you can place an order using the options below:</p>
        <ul>
          <li>
            <a href="https://www.instagram.com/rasilo_momo/" target="_blank" rel="noopener noreferrer">
              Order via Instagram
            </a>
          </li>
          <li>
            <a href="tel:+16476762455">Call Us: +1 647-676-2455</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
