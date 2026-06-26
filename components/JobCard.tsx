import { Job } from '@/types/job';

interface JobCardProps {
    job : Job;
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <div className='border rounded-lg p-4 shadow-sm'>
            <h2 className='text-xl font-semibold'>{job.title}</h2>

            <p className='text-gray-600'>{ job.department}</p>

            <div className='mt-2 flex gap-4 text-sm text-gray-500'>
                <span>{job.location}</span>
                <span>{job.type}</span>
            </div>
        </div>
    );
}
