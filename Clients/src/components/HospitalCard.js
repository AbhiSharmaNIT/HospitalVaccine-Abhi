import "./HospitalCard.css";

function HospitalCard({ hospital, onBook }) {
  return (
    <div className="hospital-card">
      <div className="hospital-header">
        <h2>{hospital.name}</h2>
        <span className="city">{hospital.city}</span>
      </div>

      <div className="hospital-body">
        <p><strong>Address:</strong> {hospital.address}</p>
        <p><strong>Pincode:</strong> {hospital.pincode}</p>

        <div className="vaccine-section">
          <h4>Available Vaccines:</h4>
          {hospital.vaccines.map((vaccine, index) => (
            <div key={index} className="vaccine-item">
              <span>{vaccine.name}</span>
              <span className="price">₹{vaccine.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hospital-footer">
        <button onClick={() => onBook(hospital)}>
          Book Slot
        </button>
      </div>
    </div>
  );
}

export default HospitalCard;