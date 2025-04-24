'use client';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/listImage?query=${query}`);
  };
  return (
    <div className="w-full flex min-h-screen justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[50%]">
        <label htmlFor="query" className="block text-sm font-medium text-gray-700">
          Search Query
        </label>
        <div className="mb-4 mt-4 flex">
          <input
            id="query"
            name="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 py-2 px-6 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="mx-4 my-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
