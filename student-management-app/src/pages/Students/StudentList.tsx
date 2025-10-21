import React from 'react';
import { useStudents } from '../../hooks/useStudents';
import StudentCard from '../../components/StudentCard';

const StudentList: React.FC = () => {
    const { students, loading, error } = useStudents();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading students: {error.message}</div>;
    }

    return (
        <div>
            <h1>Student List</h1>
            <div>
                {students.map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
};

export default StudentList;