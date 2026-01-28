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
- Render the books

### Task 2: Fetch Comments Without Blocking the Initial Render

**Your goal:** Fetch and display comments in a way that follows Server Components best practices and keeps comments **non–render-blocking** (the book list should render as soon as books are ready; comments can load in parallel or stream in afterward).

### Task 3: Bonus (Optional)

- [ ] **Loading states**: Use Suspense boundaries and fallbacks so loading comment data (or books) shows a clear loading state instead of a blank area
- [ ] **Error handling**: Consider what happens when `getCommentsByBookId` or `getBooks` fails and how to surface that in the UI

---

## Technical Notes

- **Next.js**: 16.x (App Router)
- **Styling**: Tailwind
- **TypeScript**: Strict mode enabled
- Book cover images are external; `next.config.ts` allows the required domains if you use `next/image`.

