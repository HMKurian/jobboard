interface SearchBarProps {
    search : string;
    setSearch: (value:string) => void;
}

export default function SearchBar ({
    search, 
    setSearch
}: SearchBarProps) {
    return (
        <input
            type='text'
            placeholder='Search jobs...'
            value = {search}
            onChange={(e) => setSearch(e.target.value)}
            className='...'
        />
    );
}