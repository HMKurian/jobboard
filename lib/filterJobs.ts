
import { Job } from '@/types/job';

export function filterJobs(
    jobs: Job[],
    department: string, 
    location: string, 
    type: string
) {
    return jobs.filter((job) => {
        const departmentFilter = !department || job.department === department;
        const locationFilter = !location || job.location === location;
        const typeFilter = !type || job.type === type;


        return (
            departmentFilter &&
            locationFilter &&
            typeFilter
        );
    });
}
