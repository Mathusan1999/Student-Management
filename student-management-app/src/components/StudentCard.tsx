import React from 'react';

interface StudentCardProps {
    name: string;
    age: number;
    grade: string;
    onClick: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, grade, onClick }) => {
    return (
        <div className="student-card" onClick={onClick}>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Grade: {grade}</p>
        </div>
    );
};

export default StudentCard;