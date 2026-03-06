interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search Movies"
      className="w-full p-3 border rounded"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
