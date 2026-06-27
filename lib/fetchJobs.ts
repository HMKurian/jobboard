import { Job } from '@/types/job';

export async function fetchJobs(): Promise<Job[]> {
    const response = await fetch(
        'https://gist.githubusercontent.com/HMKurian/df690fb72cc742ea1277008c8867ab5a/raw/a6c98805c4244b265dbbdfa30af6dd4535638aa9/JobData.json'
    );
    
    if (!response.ok) {
        throw new Error('Failed to fetch jobs');
    }

    return response.json();
}