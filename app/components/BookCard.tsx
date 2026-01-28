import Image from "next/image";
import type { Book } from "@/lib/db";

interface BookCardProps {
	book: Book;
}

function Stars({ rating }: { rating: number }) {
	const full = Math.floor(rating);
	const half = rating % 1 >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;
	return (
		<span
			className="flex gap-0.5 text-amber-500"
			role="img"
			aria-label={`${rating} out of 5 stars`}
		>
			{Array.from({ length: full }, (_, i) => (
				<span key={`full-${i}-${rating}`}>★</span>
			))}
			{half ? <span className="opacity-80">★</span> : null}
			{Array.from({ length: empty }, (_, i) => (
				<span key={`empty-${i}-${rating}`} className="text-gray-300">
					★
				</span>
			))}
		</span>
	);
}

export function BookCard({ book }: BookCardProps) {
	return (
		<article className="flex w-full gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300">
			<div className="relative w-28 shrink-0 overflow-hidden rounded-md bg-gray-100 aspect-2/3">
				<Image
					src={book.coverImage}
					alt={book.title}
					fill
					className="object-cover"
					sizes="112px"
				/>
			</div>
			<div className="min-w-0 flex-1">
				<h2 className="text-lg font-semibold text-gray-900">{book.title}</h2>
				<p className="text-sm text-gray-600">{book.author}</p>
				<div className="mt-1 flex items-center gap-2">
					<Stars rating={book.rating} />
					<span className="text-sm text-gray-500">{book.rating}</span>
				</div>
				<p className="mt-2 line-clamp-3 text-sm text-gray-600">
					{book.description}
				</p>
			</div>
		</article>
	);
}
