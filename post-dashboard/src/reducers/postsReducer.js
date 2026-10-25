export const initialState = {
    loading: false,
    posts: [],
    error: null
};
export fuction postsReducer(state , action){
    switch (action.type){
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                error: null
            };
    }
}