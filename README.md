# Beagle - Technical Assessment

A Next.js technical interview task focused on building a responsive, polished book listing UI using Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## Your Tasks

### Task 1: Fetch and Display Book Data

The mock database is already set up in `lib/db.ts`. The data is being fetched in `app/page.tsx`.

- Review the `Book` interface and `getBooks()` function
- The books are already available in the `Home` component

### Task 2: Build the Book List UI

Create a "Goodreads-style" book listing interface in `app/page.tsx`:

**Requirements:**

- [ ] Display books in a **responsive grid layout**
  - 1 column on mobile
  - 3 columns on desktop
- [ ] Each book card should display:
  - Cover image
  - Title
  - Author
  - Rating (consider using stars or a badge)
  - Description (truncated)
- [ ] Use `next/image` for optimized image loading
- [ ] Add **hover states** on cards for interactivity
- [ ] Ensure **consistent spacing** throughout

**Evaluation Criteria:**

- Clean, semantic HTML structure
- Effective use of Tailwind CSS utilities
- Responsive design implementation
- Proper usage of `next/image` with external images
- Attention to UI/UX details (hover states, transitions, typography)

### Task 3: Bonus Challenge (Optional)

Implement one or more of the following features:

- [ ] **Search**: Filter books by title or author
- [ ] **Filter by Rating**: Show only books above a certain rating
- [ ] **Sort**: Allow sorting by title, author, or rating
- [ ] **Loading State**: Add a skeleton loader while books are loading

---

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles & Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page (YOUR WORK GOES HERE)
├── lib/
│   └── db.ts            # Mock database with book data
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## Technical Notes

- **Next.js Version**: 16.x (App Router)
- **Styling**: Tailwind CSS v4
- **TypeScript**: Strict mode enabled

### Using External Images with next/image

The book cover images are hosted externally. The `next.config.ts` has been configured to allow these domains. If you encounter image loading issues, check the configuration.

