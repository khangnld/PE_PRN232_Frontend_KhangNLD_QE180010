# Post Management Frontend

This is a Next.js frontend application for managing posts.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following content:
```
NEXT_PUBLIC_SUPABASE_URL=https://sxajrpnrympynudlmxgs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_3fwNW4XhgUbaby0vHai8EQ_xkuuSVWr
NEXT_PUBLIC_API_BASE_URL=http://localhost:5291/api
NEXT_PUBLIC_ENVIRONMENT=development
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- View all posts with images
- Search posts by name
- Sort posts by name (A-Z / Z-A)
- Create new posts with image upload
- Edit existing posts
- Delete posts with confirmation



