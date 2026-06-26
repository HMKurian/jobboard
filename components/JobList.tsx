import { Job } from '@/types/job';
import JobCard from './JobCard';

interface JobListProps {
    jobs: Job[];

}

export default function JobList({ jobs }: JobListProps) {
    return (
        <div className='grid gap-4 md:grid-cols-2'>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}