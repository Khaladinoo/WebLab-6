export const initialState = {
    loading: false,
    posts: [],
    error: null
};
export function postsReducer(state , action){
    switch (action.type){
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_SUCCESS':
            return{
                ...state,
                loading: false,
                posts: action.payload,
                error: null
            };
         case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            };
    }
}