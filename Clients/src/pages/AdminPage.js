import { useState } from "react";
import axios from "axios";
import "./Admin.css";

function AdminPage() {
  const [hospital, setHospital] = useState({});
  const [vaccine, setVaccine] = useState({});
  const [slot, setSlot] = useState({});
  const [date, setDate] = useState("");
  const [bookings, setBookings] = useState([]);

  const addHospital = async () => {
    await axios.post("http://localhost:5000/api/hospitals", hospital);
    alert("Hospital Added ✅");
  };

  const addVaccine = async () => {
    await axios.post("http://localhost:5000/api/vaccines", vaccine);
    alert("Vaccine Added ✅");
  };

  const setSlotCapacity = async () => {
    await axios.post("http://localhost:5000/api/slots", slot);
    alert("Slot Set ✅");
  };

  const fetchBookings = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/bookings/date/${date}`
    );
    setBookings(res.data);
  };

  return (
    <div className="admin-container">

      <h1 className="title">Admin Dashboard 🚀</h1>

      <div className="grid">

        {/* Hospital */}
        <div className="card">
          <h2>🏥 Add Hospital</h2>

          <input placeholder="Hospital Name"
            onChange={(e) => setHospital({ ...hospital, name: e.target.value })}
          />
          <input placeholder="City"
            onChange={(e) => setHospital({ ...hospital, city: e.target.value })}
          />
          <input placeholder="Pincode"
            onChange={(e) => setHospital({ ...hospital, pincode: e.target.value })}
          />

          <button onClick={addHospital}>Save Hospital</button>
        </div>

        {/* Vaccine */}
        <div className="card">
          <h2>💉 Add Vaccine</h2>

          <input placeholder="Hospital ID"
            onChange={(e) => setVaccine({ ...vaccine, hospitalId: e.target.value })}
          />
          <input placeholder="Vaccine Name"
            onChange={(e) => setVaccine({ ...vaccine, name: e.target.value })}
          />
          <input type="number" placeholder="Price"
            onChange={(e) => setVaccine({ ...vaccine, price: e.target.value })}
          />

          <button onClick={addVaccine}>Add Vaccine</button>
        </div>

        {/* Slot */}
        <div className="card">
          <h2>📅 Set Slot</h2>

          <input placeholder="Hospital ID"
            onChange={(e) => setSlot({ ...slot, hospitalId: e.target.value })}
          />
          <input type="date"
            onChange={(e) => setSlot({ ...slot, date: e.target.value })}
          />
          <input type="number" placeholder="Capacity"
            onChange={(e) => setSlot({ ...slot, capacity: e.target.value })}
          />

          <button onClick={setSlotCapacity}>Set Capacity</button>
        </div>

        {/* Bookings */}
        <div className="card">
          <h2>📊 View Bookings</h2>

          <input type="date" onChange={(e) => setDate(e.target.value)} />

          <button onClick={fetchBookings}>Fetch</button>

          <div className="booking-list">
            {bookings.map((b) => (
              <div key={b._id} className="booking-card">
                <p><b>User:</b> {b.userId}</p>
                <p><b>Hospital:</b> {b.hospitalName}</p>
                <p><b>Date:</b> {b.date}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminPage;