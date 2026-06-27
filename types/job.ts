export interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Internship' | 'Contract';
    about: string;
    responsibilities: string[];
    qualifications: string[];
}