export const FETCH_SEARCH = 'FETCH_SEARCH';

export const fetchSearch = (data, history) => {
    return dispatch => {
        const submitData = { ...data };

        dispatch({
            type: FETCH_SEARCH,
            payload: submitData
        });

        const query = submitData.q ? encodeURIComponent(submitData.q.trim()) : '';
        const search = query ? `?q=${query}` : '';
        
        if(history.location.search !== search){
            const searchHistory = {
                pathname: '/search',
                search
            }
    
            history.push(searchHistory);
        }
    };
};