import { useState, useEffect } from 'react';
import { fetchStudents, createStudent, updateStudent, deleteStudent } from '../services/api';

const useStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadStudents = async () => {
            try {
                const data = await fetchStudents();
                setStudents(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadStudents();
    }, []);

    const addStudent = async (student) => {
        try {
            const newStudent = await createStudent(student);
            setStudents((prevStudents) => [...prevStudents, newStudent]);
        } catch (err) {
            setError(err);
        }
    };

    const editStudent = async (id, updatedStudent) => {
        try {
            const student = await updateStudent(id, updatedStudent);
            setStudents((prevStudents) =>
                prevStudents.map((s) => (s.id === id ? student : s))
            );
        } catch (err) {
            setError(err);
        }
    };

    const removeStudent = async (id) => {
        try {
            await deleteStudent(id);
            setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    return { students, loading, error, addStudent, editStudent, removeStudent };
};

export default useStudents;