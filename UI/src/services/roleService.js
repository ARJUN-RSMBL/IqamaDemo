import apiClient from './api-client';

const roleService = {
    // Get all roles
    getAllRoles: () => {
        return apiClient.get('/roles');
    },

    // Add new role
    addRole: (roleData) => {
        return apiClient.post('/roles', roleData);
    },

    // Get role by ID
    getRoleById: (id) => {
        return apiClient.get(`/roles/${id}`);
    },

    // Delete role
    deleteRole: (id) => {
        return apiClient.delete(`/roles/${id}`);
    },

    // Update role
    updateRole: (id, roleData) => {
        return apiClient.put(`/roles/${id}`, roleData);
    }
};

export default roleService;