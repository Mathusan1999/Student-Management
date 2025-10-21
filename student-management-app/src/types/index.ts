export interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
    email: string;
}

export interface StudentDetail extends Student {
    address: string;
    phone: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface Settings {
    theme: string;
    notificationsEnabled: boolean;
}