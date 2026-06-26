'use client'
import { useEffect, useState } from 'react';
import { fetchJobs } from '@/lib/fetchJobs';
import { Job } from '@/types/job';
import JobList from '@/components/JobList'


export default function Home() {

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadJobs();
  }, []);
  return ( 
    <main> 
      <h1 className = 'text-3xl font-bold'>
        Job Listings
      </h1>
      <JobList jobs={jobs} />
      {/* {jobs.map((job) => (
        <div key={job.id}>{job.title}</div>
      ))} */}
    </main>
  );
}
