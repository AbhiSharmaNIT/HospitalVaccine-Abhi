# 🏥 Hospital Vaccine Search & Slot Booking System

A full-stack web application designed to help citizens easily find nearby hospitals offering vaccines, check real-time availability, compare prices, and book vaccination slots without overbooking.

Built as part of a **Fullstack Hackathon Use Case**.

---

## 📌 Problem Statement

Citizens often struggle to:

* Find nearby hospitals offering specific vaccines
* Check daily slot availability
* Compare vaccine prices
* Book slots without delays or overbooking

---

## 🎯 Objective

To build a platform that:

* Enables users to search hospitals and vaccines
* Shows real-time slot availability
* Displays transparent pricing
* Allows seamless booking and management of vaccine slots

---

## 👥 User Roles & Capabilities

### 👤 Citizen / Patient

* 🔍 Search hospitals by **city / pincode / name**
* 🎯 Filter by **vaccine type and price**
* 📅 View availability (today, tomorrow, upcoming days)
* 💰 Compare vaccine costs across hospitals
* ✅ Book vaccine slots
* 🔄 Modify or ❌ cancel bookings
* 📄 Receive booking confirmation

---

### 🏥 Hospital / Admin

* ➕ Add & update hospital details
* 💉 Manage vaccines and pricing
* 📊 Set **daily slot capacity**
* 📅 Track bookings for specific dates

---

## ⚙️ Core Functionalities

* 📆 **Daily Slot Management**
  Availability is tracked per date

* 🚫 **No Overbooking**
  Booking fails if slots are full

* 💰 **Price Transparency**
  Cost is visible and fixed at booking time

* 💾 **Persistent Storage**
  Data stored for:

  * Users
  * Hospitals
  * Vaccines
  * Bookings

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* HTML, CSS, JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

---

## 🏗️ System Design Highlights

* 🔗 RESTful API architecture
* 🧠 Efficient data modeling for:

  * Hospitals
  * Vaccines
  * Slots
  * Bookings
* 🔐 Role-based access (User vs Admin)
* ✅ Backend validations:

  * Slot availability
  * Duplicate booking prevention
  * Date validation

---

## 📂 Project Structure

```id="rxvij3"
HospitalVaccine/
│
├── client/        # Frontend (React)
├── server/        # Backend (Node + Express)
├── README.md
```

---

## 🔗 API Overview

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | /hospitals   | Get all hospitals         |
| GET    | /search      | Search & filter hospitals |
| POST   | /auth/signup | Register user             |
| POST   | /auth/login  | Login user                |
| POST   | /booking     | Book vaccine slot         |
| PUT    | /booking/:id | Modify booking            |
| DELETE | /booking/:id | Cancel booking            |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```id="2plk0u"
git clone https://github.com/your-username/HospitalVaccine.git
cd HospitalVaccine
```

---

### 2️⃣ Backend Setup

```id="rt9rtn"
cd server
npm install
npm start
```

Runs on:

```id="vr4hpk"
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```id="6y0xhc"
cd client
npm install
npm run dev
```

Runs on:

```id="9kxt14"
http://localhost:5173
```

---

## 🔐 Environment Variables

Create `.env` in server:

```id="6j7hsv"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🚀 Key Features (Hackathon Focus)

* 🔎 Advanced search & filtering UI
* ⚡ Real-time availability tracking
* 🧾 Clean backend booking logic
* 🔐 Authentication & authorization
* 📉 Prevents overbooking
* 🧩 Scalable architecture

---

## 💡 Design Decisions

* Slot system implemented as **date-based capacity**
* REST APIs for scalability
* MongoDB used for flexible schema design
* Separate modules for **auth, hospitals, bookings**

---

## 📸 Screenshots

*Add UI screenshots here*

---

## 🔮 Future Improvements

* 💳 Payment integration
* 📩 Email/SMS notifications
* 📊 Admin dashboard analytics
* 🌍 Geo-location based search
* 🔄 Real-time updates using WebSockets

---

## 🤝 Contribution

* Fork the repo
* Create feature branch
* Commit changes
* Open Pull Request

---

## 👨‍💻 Author

**Abhishek Kumar**
Full Stack Developer | Hackathon Participant

---

## ⭐ Acknowledgement

* MongoDB Docs
* React Docs
* Node.js Community

---
