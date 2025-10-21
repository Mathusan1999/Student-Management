import React from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents';

const StudentDetail: React.FC = () => {
    const { studentId } = useParams<{ studentId: string }>();
    const { students } = useStudents();
    const student = students.find(s => s.id === studentId);

    if (!student) {
        return <div>Student not found</div>;
    }

    return (
        <div>
            <h1>{student.name}</h1>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            {/* Add more student details as needed */}
        </div>
    );
};

export default StudentDetail;