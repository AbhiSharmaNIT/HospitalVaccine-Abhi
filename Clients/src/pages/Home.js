import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import HospitalCard from "../components/HospitalCard";

function Home() {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [vaccine, setVaccine] = useState("");
  const [price, setPrice] = useState("");

  const [hospitals, setHospitals] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ✅ DEFAULT DATA (shown initially or fallback)
  const defaultHospitals = [
    {
      _id: "1",
      name: "Apollo Hospital",
      city: "Hyderabad",
      pincode: "500001",
      vaccines: [
        { name: "Covishield", price: 500 },
        { name: "Covaxin", price: 600 },
      ],
    },
    {
      _id: "2",
      name: "City Care Hospital",
      city: "Bangalore",
      pincode: "560001",
      vaccines: [
        { name: "Covishield", price: 450 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 550 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 550 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 550 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 550 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 550 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 550 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 750 },
      ],
    },
    {
      _id: "3",
      name: "Sunrise Medical Center",
      city: "Chennai",
      pincode: "600001",
      vaccines: [
        { name: "Covaxin", price: 350 },
      ],
    },
  ];

  // 🔥 FETCH DATA
  useEffect(() => {
    // show default first
    setHospitals(defaultHospitals);
    setFiltered(defaultHospitals);

    axios
      .get("http://localhost:5000/api/hospitals")
      .then((res) => {
        if (res.data.length > 0) {
          setHospitals(res.data);
          setFiltered(res.data);
        }
      })
      .catch((err) => {
        console.log("Backend not working, using default data");
      });
  }, []);

  // 🔍 SEARCH + FILTER
  const handleSearch = () => {
    let data = hospitals;

    if (search) {
      data = data.filter(
        (h) =>
          h.name.toLowerCase().includes(search.toLowerCase()) ||
          h.city.toLowerCase().includes(search.toLowerCase()) ||
          h.pincode.includes(search)
      );
    }

    if (vaccine) {
      data = data.filter((h) =>
        h.vaccines?.some((v) => v.name === vaccine)
      );
    }

    if (price) {
      data = data.filter((h) =>
        h.vaccines?.some((v) => v.price <= Number(price))
      );
    }

    setFiltered(data);
  };

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">💉 VacciBook</div>
        <div className="nav-links">
          <button className="nav-btn active">Home</button>
          <button className="booking-btn">My Bookings</button>
        </div>
      </nav>

      {/* Search */}
      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search hospitals, city, or pincode..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="filter-btn"
            onClick={() => setShowFilter(true)}
          >
            ⚙ Filters
          </button>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* FILTER MODAL */}
      {showFilter && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>Filter Options</h2>

            <label>Vaccine Type</label>
            <select onChange={(e) => setVaccine(e.target.value)}>
              <option value="">All</option>
              <option value="Covishield">Covishield</option>
              <option value="Covaxin">Covaxin</option>
            </select>

            <label>Max Price (₹)</label>
            <input
              type="number"
              placeholder="Enter max price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="modal-buttons">
              <button
                className="apply-btn"
                onClick={() => {
                  handleSearch();
                  setShowFilter(false);
                }}
              >
                Apply
              </button>

              <button
                className="close-btn"
                onClick={() => setShowFilter(false)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 🏥 HOSPITAL CARDS */}
      <div className="hospital-list">
        {filtered.length > 0 ? (
          filtered.map((hospital) => (
            <HospitalCard key={hospital._id} hospital={hospital} />
          ))
        ) : (
          <p className="no-results">No hospitals found</p>
        )}
      </div>

    </div>
  );
}

export default Home;