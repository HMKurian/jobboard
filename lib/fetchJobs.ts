import { Job } from '@/types/job';

export async function fetchJobs(): Promise<Job[]> {
    const response = await fetch(
        'https://gist.githubusercontent.com/HMKurian/df690fb72cc742ea1277008c8867ab5a/raw/814e4b2001b7af57d0f5821e08e8f91a8be33f89/JobData.json'
    );
    
    if (!response.ok) {
        throw new Error('Failed to fetch jobs');
    }

    return response.json();
}