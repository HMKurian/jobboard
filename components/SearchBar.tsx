import { Search } from "lucide-react";


interface SearchBarProps {
    search : string;
    setSearch: (value:string) => void;
}

export default function SearchBar ({
    search, 
    setSearch
}: SearchBarProps) {
    return (
        <div className="relative w-full">
            <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
            />
            <input
                type='text'
                placeholder='Search jobs...'
                value = {search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-500 focus:border-black focus:outline-none focus:ring-1"
            />
        </div>
    );
}