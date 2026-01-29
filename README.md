# Beagle - Technical Assessment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## Your Tasks

### Task 1: Connect to the Data Layer

The mock database is in `lib/db.ts`:

- Review the `Book` interface and `getBooks()` function
- Review the `Comment` interface and `getCommentsByBookId(bookId)` function
- *Render the books*

### Task 2: Fetch Comments Without Blocking the Initial Render

**Your goal:** Fetch and display comments in a way that follows Next + React best practices and keeps comments **non–render-blocking**.

### Task 3: Bonus (Optional)

- [ ] **Sort by rating**: Add a way to sort the book list by rating (e.g. a button or toggle). Keep the page as a server component; use a client component only where needed for the interactive sort.

---

## Technical Notes

- **Next.js**: 16.x (App Router)
- **Styling**: Tailwind
- **TypeScript**: Strict mode enabled
- Book cover images are external; `next.config.ts` allows the required domains if you use `next/image`.

