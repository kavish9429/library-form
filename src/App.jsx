import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    regNo: '',
    biography: '',
    dateOfPurchase: '',
    dateOfReturn: '',
  });
  const [records, setRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedRecords = records.map((record, index) =>
        index === currentIndex ? formData : record
      );
      setRecords(updatedRecords);
      setIsEditing(false);
    } else {
      setRecords([...records, formData]);
    }
    setFormData({
      name: '',
      dob: '',
      regNo: '',
      biography: '',
      dateOfPurchase: '',
      dateOfReturn: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(records[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>KAVIYARASU</h1>
      <h2>KANNADHASAN LIBRARY</h2>
      <h3>KARAIKUDI-630001</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Register Number:
          <input
            type="text"
            name="regNo"
            value={formData.regNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Biography:
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Purchase:
          <input
            type="date"
            name="dateOfPurchase"
            value={formData.dateOfPurchase}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Return:
          <input
            type="date"
            name="dateOfReturn"
            value={formData.dateOfReturn}
            onChange={handleChange}
            required
          />
        </label>
        <button className="save-button" type="submit">
          {isEditing ? 'Save' : 'Add'}
        </button>
      </form>

      <div className="record-list">
        {records.map((record, index) => (
          <div key={index} className="record">
            <p><strong>Name:</strong> {record.name}</p>
            <p><strong>Date of Birth:</strong> {record.dob}</p>
            <p><strong>Register Number:</strong> {record.regNo}</p>
            <p><strong>Biography:</strong> {record.biography}</p>
            <div className="dates">
              <p><strong>Date of Purchase:</strong> {record.dateOfPurchase}</p>
              <p><strong>Date of Return:</strong> {record.dateOfReturn}</p>
            </div>
            <div className="actions">
              <button
                className="edit-button"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
