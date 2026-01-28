export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  description: string;
  coverImage: string;
}

const books: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: 4.2,
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.5,
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving every day. Learn how small changes can lead to remarkable results.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    rating: 4.6,
    description:
      "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
  },
  {
    id: "4",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    rating: 4.4,
    description:
      "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664458703i/32620332.jpg",
  },
  {
    id: "5",
    title: "Educated",
    author: "Tara Westover",
    rating: 4.5,
    description:
      "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
  },
  {
    id: "6",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    rating: 4.5,
    description:
      "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark.",
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
  },
];

export interface Comment {
  id: string;
  bookId: string;
  author: string;
  text: string;
  createdAt: string;
}

const comments: Comment[] = [
  { id: "c1", bookId: "1", author: "Jane", text: "Could not put it down.", createdAt: "2024-01-15T10:00:00Z" },
  { id: "c2", bookId: "1", author: "Alex", text: "Beautiful and thought-provoking.", createdAt: "2024-01-20T14:30:00Z" },
  { id: "c3", bookId: "2", author: "Sam", text: "Life-changing framework.", createdAt: "2024-02-01T09:00:00Z" },
  { id: "c4", bookId: "3", author: "Jordan", text: "Best sci-fi in years.", createdAt: "2024-02-10T16:00:00Z" },
];

/**
 * Fetches comments for a given book
 * @param bookId - The book's id
 * @returns Promise<Comment[]> - Comments for that book after 300ms delay
 */
export async function getCommentsByBookId(bookId: string): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments.filter((c) => c.bookId === bookId));
    }, 300);
  });
}

/**
 * Simulates fetching books from a database with network latency
 * @returns Promise<Book[]> - Array of book objects after 500ms delay
 */
export async function getBooks(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 500);
  });
}
