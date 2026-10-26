import React, {useReducer, useState, useEffect, use} from "react";
import { postsReducer, initialState } from "./reducers/postsReducer";
import { fetchPosts } from "./api/postsApi";
import PostList from "./components/PostList";
import FilterForm from "./components/FilterForm";

function App(){
    const [state, dispatch] = useReducer(postsReducer,initialState);
    const [filterText, setFilterText] = useState('');
    useEffect(() => {
        let isMounted = true;
        async function loadPosts() {
            dispatch({ type: 'FETCH_START' });
            try {
                const data = await fetchPosts();
                if (isMounted) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                }
             }catch (err) {
                if (isMounted) {
                    dispatch({ type: 'FETCH_ERROR', payload: err.message || 'Failed to fetch posts.' });
                 }
            }
    }
loadPosts();
return () => {
    isMounted = false;
};
   }, []);

   const filteredPosts = state.posts.filter(post => 
        post.title.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
                        <h1 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
                Post Dashboard
            </h1>
            <FilterForm 
                filterText={filterText} 
                onFilterChange={setFilterText} 
            />
            {state.loading && (
                <div style={{ padding: '20px', textAlign: 'center', color: '#007bff', fontWeight: 'bold' }}>
                    Loading posts, please wait...
                </div>
            )}
            {state.error && (
                <div style={{ padding: '16px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px', marginBottom: '20px' }}>
                    <strong>Error:</strong> {state.error}
                </div>
            )}
            {!state.loading && !state.error && filteredPosts.length === 0 && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d', fontStyle: 'italic' }}>
                    No posts found matching your criteria.
                </div>
            )}
}
