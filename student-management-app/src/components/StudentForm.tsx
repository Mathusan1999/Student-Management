import React, { useState } from 'react';

const StudentForm = ({ onSubmit, initialData }) => {
    const [name, setName] = useState(initialData ? initialData.name : '');
    const [age, setAge] = useState(initialData ? initialData.age : '');
    const [grade, setGrade] = useState(initialData ? initialData.grade : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, age, grade });
        setName('');
        setAge('');
        setGrade('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Grade:</label>
                <input
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;