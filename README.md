# Next.js

- React.js full-stack framework for web development
- In addition to building UI, next.js also provides features like routing, optimization, data fetching, etc.
- It uses react server component
- Opinionated framework(file, folder conventions)

# Features
1. Routing: file based routing [about page banaunu cha bhaye about folder banaune ani about page ko file]
2. Rendering: Server-side rendering (SSR), Client-side rendering (CSR), static site generation (SSG)
3. Optimization
4. Data fetching
5. API routes
6. Styling

### React server component

## 1. Server component (default)

- All react component in Next.js are server component by default
- Server side tasks like data fetching , files read, database data  fetching, async tasks.
- Cannot use react hooks, events , user interaction.


## 2. Client Component
- Can use react hooks, events, user interaction.
- Traditional react components
- Use the directive `use client` at the top of component file


## 3. Routing

- File based routing
- All routes must be inside `src/app` directory
- Every routed must have `page.js` or `page.jsx` file
- `page.js` or `page.jsx` must have a default export

1. Simple routes

- Create a folder inside /src/app and add a page.js file
- For example:
- /src/app/about/page.js
- /src/app/contact/page.js

2. Nested routes

- Create a foledr inside folder for nested routes
- src/app/courses/frontend/react/page.js
- src/app/courses/frontend/next/page.js
- src/app/courses/backend/express/page.js
- src/app/courses/backend/laravel/page.js

3. Dyanamic routes

- Create a folder encloses by []
- /src/app/products/[id]/page.js

4. Nested dynamic routes

- /src/app/product/[id]reviews/[reviewId]/page.js

5. Catch all segments

- /src/app/blogs/[...blogId]/page.js

6. Private folders

- /src/app/_folder/

7. Route groups

- /src/app/(auth)


## Layout

- UI component that is shared among different pages [not reusable but shared]
- `layout.js` or `layout.jsx`

## Special files of Next.js

- page.js
- not-found.js
- layout.js
- error.js //alwaysclient component


## Link

- <Link> for navigation, similar to <a>.
- For programmatic navigation, use the  `useRouter` hook.


## params and SearchParams

1. For Server component

- params: dynamic route params, => available on page.js and layout.js
- searchParams: query, available on page.js

2. For Client Component

- useParams()
- UseSearchParams()


## Metadata

- Metadata api is used to define metadata of the page
- page.js/ layout.js
- Useful of search engine optimization
- static: metadata
- dynamic: generateMetadata


## Rendering: SSR, CSR, SSG

- Process of converting/ transforming component code into UI.
- Client side rendering (CSR) and Server side rendering(SSR).
- Static site (SSG) are generated during app build.

## CSR

- If rendering is done in browser -> CSR

## SSR

- If rendering is done in server -> SSR


## Client component

- Interactivity
- Event, User interaction
- State management
- To make client component, `use client` directive
- Can be both CSR, SSR

## Server component

- Fetch data from API
- Send API request
- Metadata
- By default, all components in Next.js are Server component.
- Only SSR