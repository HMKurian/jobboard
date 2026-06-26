
interface FilterPanelProps {
    department: string;
    location: string;
    type: string;

    departments: string[];
    locations: string[];
    jobTypes: string[];

    setDepartment: (value: string) => void;
    setLocation: (value: string) => void;
    setType: (value: string) => void;
}


export default function FilterPanel({
    department,
    location,
    type,

    departments,
    locations,
    jobTypes,

    setDepartment,
    setLocation,
    setType

}: FilterPanelProps) {
    return (
        <div className='flex flex-col gap-4 md:flex-row'>
            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value="">All Departments</option>

                {departments.map((dept) => (
                    <option key={dept} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>
            
            <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            >
                <option value="">All Locations</option>

                {locations.map((loc) => (
                    <option key={loc} value={loc}>
                        {loc}
                    </option>
                ))}
            </select>

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">All Job Types</option>

                {jobTypes.map((jobType) => (
                    <option key={jobType} value={jobType}>
                        {jobType}
                    </option>
                ))}
            </select>

        </div>
    );
}