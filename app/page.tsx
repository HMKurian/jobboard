'use client'
import { useEffect, useState } from 'react';
import { fetchJobs } from '@/lib/fetchJobs';
import { Job } from '@/types/job';
import JobList from '@/components/JobList'
import Filter from '@/components/FilterPanel';
import { filterJobs } from '@/lib/filterJobs';
import SearchBar from '@/components/SearchBar';
import { Playfair_Display } from "next/font/google";
import Image from 'next/image';



const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Home() {

  const [jobs, setJobs] = useState<Job[]>([]);
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');

  const filteredJobs = filterJobs(jobs,department,location, type, search);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showDetails, setShowDetails] = useState(false);

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

  useEffect(() => {
    if (
      filteredJobs.length > 0 &&
      !filteredJobs.find((job) => job.id === selectedJob?.id)
    ) {
      setSelectedJob(filteredJobs[0]);
    }

    if (filteredJobs.length === 0) {
      setSelectedJob(null);
    }
  }, [filteredJobs]);
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
        <header className="flex h-32 w-full items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700">

          <div className="flex items-center gap-0">
            
            <Image
              src="/logo1.png"
              alt="Company logo"
              width={150}
              height={150}
              className="object-contain -mr-2"
            />

            <h1
              className={`${playfair.className} text-5xl font-bold text-white md:text-6xl`}
            >
              Open Positions
            </h1>

          </div>

        </header>

      <div className="mx-auto max-w-7xl">

        
        {/* Search + Filters */}
        <section className="mb-8 rounded-xl bg-white p-5 shadow">
          <div className="flex flex-wrap items-center gap-4">

            <div className="min-w-[260px] flex-1">
              <SearchBar
                search={search}
                setSearch={setSearch}
              />
            </div>

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

          </div>
        </section>

        {/* Main Layout */}
        <section className="grid grid-cols-12 gap-6">

          {/* Left Column */}
          <div className={`col-span-12 md:col-span-4 rounded-xl bg-white shadow ${showDetails ? "hidden md:block" : "block"}`}>

            <div className="border-b px-5 py-4">



              <h2 className="text-black font-semibold">
                {filteredJobs.length} Open Positions
              </h2>
            </div>

            <div className="max-h-[700px] overflow-y-auto">

              {filteredJobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => { 
                    setSelectedJob(job);
                    setShowDetails(true);
                  }}
                  className={`w-full border-b p-5 text-left transition hover:bg-slate-50 ${
                    selectedJob?.id === job.id
                      ? 'bg-blue-50 border-l-4 border-l-blue-600'
                      : ''
                  }`}
                >
                  <h3 className="font-semibold text-blue-900">
                    {job.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {job.location}
                  </p>

                  <p className="text-sm text-gray-600">
                    {job.type}
                  </p>
                </button>
              ))}

            </div>

          </div>

          {/* Right Column */}
          <div className={`col-span-12 md:col-span-8 rounded-xl bg-white p-8 shadow ${showDetails ? "block" : "hidden md:block"}`}>

            {selectedJob ? (
              <>
                <button
                  onClick={() => setShowDetails(false)}
                  className="mb-4 text-blue-600 md:hidden"
                >
                  ← Back to jobs
                </button>
                <h2 className="text-3xl font-bold text-blue-900">
                  {selectedJob.title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">

                  <span className="rounded-none bg-blue-600 px-3 py-1 text-white">
                    {selectedJob.department}
                  </span>

                  <span className="rounded-none bg-blue-600 px-3 py-1 text-white">
                    {selectedJob.location}
                  </span>

                  <span className="rounded-none bg-blue-600 px-3 py-1 text-white">
                    {selectedJob.type}
                  </span>

                </div>

                <div className="mt-8 space-y-8">

                  {/* About */}
                  <section>
                    <h3 className="mb-2 text-black font-semibold">
                      About this role
                    </h3>

                    <p className="leading-7 text-gray-600">
                      {selectedJob.about}
                    </p>
                  </section>

                  {/* Responsibilities */}
                  <section>
                    <h3 className="mb-2 text-black font-semibold">
                      Responsibilities
                    </h3>

                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Qualifications */}
                  <section>
                    <h3 className="mb-2 text-black font-semibold">
                      Qualifications
                    </h3>

                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      {selectedJob.qualifications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <button className="rounded-none bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                    Apply Now
                  </button>

                </div>

              </>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500">
                No jobs match your search.
              </div>
            )}

          </div>

        </section>
      </div>
    </main>
  );
}
