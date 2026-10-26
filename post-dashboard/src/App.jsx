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
            }
        }
    })
}