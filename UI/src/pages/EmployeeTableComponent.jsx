import React from 'react'
import "../styles/TableStyles.css"
function EmployeeTableComponent() {
  return (
    <div>
      <h2>Employee Details</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.expiryDate}</td>
              <td>{employee.status}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTableComponent