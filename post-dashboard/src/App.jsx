import React, {useReducer, useState, useEffect} from "react";
import { postsReducer, initialState } from "./reducers/postsReducer";
import { fetchPosts } from "./api/postsApi";
import PostList from "./components/PostList";
import FilterForm from "./components/FilterForm";

function App(){
    const [state, dispatch] = useReducer(postsReducer,initialState);
    
}