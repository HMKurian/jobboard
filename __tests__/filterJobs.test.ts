
import { filterJobs } from '../lib/filterJobs';
import { Job } from '../types/job'
import { describe } from 'node:test';
const mockTest: Job[] = [
    {
        "id": 1,
        "title": "Frontend Developer",
        "department": "Engineering",
        "location": "Remote",
        "type": "Internship"
    },

    {
        "id": 2,
        "title": "Backend Engineer",
        "department": "Engineering",
        "location": "New York",
        "type": "Full-time"
    },

    {
        "id": 3,
        "title": "UX Designer",
        "department": "Design",
        "location": "Remote",
        "type": "Contract"
    },

    {
        "id": 4,
        "title": "Marketing Specialist",
        "department": "Marketing",
        "location": "London",
        "type": "Full-time"
    },

    {
        "id": 5,
        "title": "Product Designer",
        "department": "Design",
        "location": "New York",
        "type": "Full-time"
    }
];


describe('filterJobs', () => {

    test('Filtering jobs based on departments', () => {
        const result = filterJobs(
            mockTest,
            'Design',
            '',
            '',
            ''
        );

        expect(result).toHaveLength(2);
        expect(result[0].title).toBe('UX Designer');
        expect(result[1].title).toBe('Product Designer');
    });
})