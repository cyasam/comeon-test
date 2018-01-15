export const FETCH_SEARCH = 'FETCH_SEARCH';

export const fetchSearch = (data, history) => {
    return dispatch => {
        const submitData = { ...data };

        dispatch({
            type: FETCH_SEARCH,
            payload: submitData
        });

        const search = submitData.q ? `?q=${submitData.q.trim()}` : '';
        
        if(history.location.search !== search){
            const searchHistory = {
                pathname: '/search',
                search
            }
    
            history.push(searchHistory);
        }
    };
};