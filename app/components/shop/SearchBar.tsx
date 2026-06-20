"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search spare parts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#161d29]
          px-6
          py-4
          text-white
          outline-none
          transition
          focus:border-orange-500
          focus:ring-2
          focus:ring-orange-500/30
        "
      />
    </div>
  );
}