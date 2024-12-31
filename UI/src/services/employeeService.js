import apiClient from './api-client';

const employeeService = {
    // Get all employees
    getAllEmployees: () => {
        return apiClient.get('/employee');
    },

    // Get employee by ID
    getEmployeeById: (id) => {
        return apiClient.get(`/employee/${id}`);
    },

    // Create new employee
    createEmployee: (employeeData) => {
        return apiClient.post('/employee', employeeData);
    },

    // Update employee
    updateEmployee: (id, employeeData) => {
        return apiClient.put(`/employee/${id}`, employeeData);
    },

    // Delete employee
    deleteEmployee: (id) => {
        return apiClient.delete(`/employee/${id}`);
    },

    // Get expiry notifications
    getExpiryNotifications: () => {
        return apiClient.get('/employee/test-scheduler');
    }
};

export default employeeService;