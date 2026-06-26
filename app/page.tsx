'use client'
import { useEffect, useState } from 'react';
import { fetchJobs } from '@/lib/fetchJobs';
import { Job } from '@/types/job';
import JobList from '@/components/JobList'
import Filter from '@/components/FilterPanel';
import { filterJobs } from '@/lib/filterJobs';


export default function Home() {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const filteredJobs = filterJobs(jobs,department,location, type);
  
  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const jobTypes = [...new Set(jobs.map(job => job.type))];

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
      <Filter 
        department={department}
        location={location}
        type={type}

        departments={departments}
        locations={locations}
        jobTypes={jobTypes}

        setDepartment={setDepartment}
        setLocation={setLocation}
        setType={setType}
      />
      <JobList jobs={filteredJobs} />
    </main>
  );
}
