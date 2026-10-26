## 🛠️ Summary of Changes & Project Architecture

This React application was developed as part of the Post Dashboard lab assignment. Below is a detailed breakdown of the structural, state management, and configuration changes implemented:

---

### 1. Project Configuration & Build System Setup
* **Vite Environment Alignment**: Standardized the project environment to use standard JavaScript (`.jsx`) instead of TypeScript (`.tsx`). 
* **`tsconfig` Optimization**: Resolved Vite parser warnings (`ts(1005)`) by updating `tsconfig.app.json` with `"allowJs": true` and `"checkJs": false` to seamlessly support `.jsx` entry points.
* **Entry Point Re-linking**: Corrected script paths in `index.html` to point to `/src/main.jsx` and updated `main.jsx` to render the main `App` component cleanly inside `React.StrictMode`.

---

### 2. State Management Architecture (`useReducer` & `useState`)
* **Asynchronous Reducer (`postsReducer.js`)**: Implemented explicit state transitions using `useReducer`:
  * `FETCH_START`: Sets `loading: true` and clears previous errors.
  * `FETCH_SUCCESS`: Updates `posts` data array and sets `loading: false`.
  * `FETCH_ERROR`: Captures failure messages and updates `error` state.
* **Controlled Input State (`useState`)**: Managed local user input inside `App.jsx` and passed it down to `FilterForm.jsx` for real-time text filtering.

---

### 3. Data Fetching & Effect Cleanup Logic
* **Safe Mounting Pattern**: Integrated an `isMounted` boolean flag inside the `useEffect` hook in `App.jsx` to prevent memory leaks and state updates on unmounted components during asynchronous operations.
* **API Abstraction (`postsApi.js`)**: Encapsulated native `fetch` API calls to `https://jsonplaceholder.typicode.com/posts` with built-in error handling.

---

### 4. Derived State Filtering (Core Assignment Requirement)
* **On-the-Fly Calculation**: Calculated `filteredPosts` directly within the render body of `App.jsx` without storing filtered results in a separate state or triggering additional `useEffect` hooks. This ensures single-source-of-truth data flow.

---

### 5. Explicit UI Component & State Handlers
* **Component Modularization**: Split the UI into modular, reusable components:
  * `FilterForm.jsx`: Controlled search input component.
  * `PostList.jsx`: Renders the array of post items.
  * `Post.jsx`: Displays individual post title and body with standard default exports.
* **Conditional UI Rendering**: Handled 4 explicit UI states:
  1. **Loading State**: Displays loading indicator during data fetch.
  2. **Error State**: Displays styled error container upon fetch failure.
  3. **Empty State**: Displays informational fallback when no posts match filter criteria.
  4. **Data State**: Renders `PostList` when matching results exist.
