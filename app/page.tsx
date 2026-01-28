import { getBooks } from "@/lib/db";

export default async function Home() {
  const books = await getBooks();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">BookShelf</h1>
          <p className="mt-2 text-gray-600">
            Discover your next favorite read
          </p>
        </header>

        {/*
          TODO: Implement the book list UI

          Requirements:
          - Display books in a responsive grid layout (1 col mobile, 2-3 cols desktop)
          - Each book card should show: cover image, title, author, rating, description
          - Use next/image for optimized image loading
          - Add hover states for interactivity
          - Use Tailwind's aspect-ratio utilities for consistent image sizing

          The `books` array is already fetched above and available to use.
          Each book has: id, title, author, rating, description, coverImage
        */}

        <main>
          {/* Book grid goes here */}
          <p className="text-gray-500">
            {books.length} books available. Implement the UI to display them!
          </p>
        </main>
      </div>
    </div>
  );
}
