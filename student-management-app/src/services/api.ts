import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/students';

export const fetchStudents = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching students: ' + error.message);
    }
};

export const fetchStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching student: ' + error.message);
    }
};

export const createStudent = async (studentData) => {
    try {
        const response = await axios.post(API_BASE_URL, studentData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating student: ' + error.message);
    }
};

export const updateStudent = async (id, studentData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, studentData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating student: ' + error.message);
    }
};

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting student: ' + error.message);
    }
};