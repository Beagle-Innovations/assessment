import { BookCard } from "./components/BookCard";

export default async function Home() {
	const books = [];

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<header className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900">BookShelf</h1>
					<p className="mt-2 text-gray-600">Discover your next favorite read</p>
				</header>

				<main className="flex flex-col gap-4">
					{books.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</main>
			</div>
		</div>
	);
}
