
import { Job } from '@/types/job';

export function filterJobs(
    jobs: Job[],
    department: string, 
    location: string, 
    type: string,
    search: string
) {
    return jobs.filter((job) => {
        const departmentFilter = !department || job.department === department;
        const locationFilter = !location || job.location === location;
        const typeFilter = !type || job.type === type;
        const searchBar = search === '' || job.title.toLowerCase().includes(search.toLowerCase());


        return (
            departmentFilter &&
            locationFilter &&
            typeFilter &&
            searchBar
        );
    });
}
