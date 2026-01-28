export interface Book {
	id: string;
	title: string;
	author: string;
	rating: number;
	description: string;
	coverImage: string;
}

export interface Comment {
	id: string;
	bookId: string;
	author: string;
	text: string;
	createdAt: string;
}
