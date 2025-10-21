export const validateStudentName = (name: string): boolean => {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
};

export const validateStudentEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

export const validateStudentAge = (age: number): boolean => {
    return age > 0 && age < 120;
};

export const validateStudentGrade = (grade: string): boolean => {
    const validGrades = ['A', 'B', 'C', 'D', 'F'];
    return validGrades.includes(grade);
};