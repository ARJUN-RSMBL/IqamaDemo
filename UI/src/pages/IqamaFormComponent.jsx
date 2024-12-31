import React from 'react'
import '../styles/FormStyles.css'

/* Employee Registration Form */
function IqamaFormComponent() {
  return (
    <div className="iqama-form-container">
      <h2 className="form-title">Employee Registration Form</h2>
      <form className="iqama-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate" className="form-label">Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"

            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="roleId" className="form-label">Role:</label>
          <select
            id="roleId"
            name="roleId"

            required
            className="form-select"
          >
            <option value="">Select a Role</option>

          </select>
        </div>

        <br />
        <button type="submit" className="form-button">Submit</button>
      </form>
      <br />
    </div>
  )
}

export default IqamaFormComponent