export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE = "DELETE";
export const FETCH_RESULTS = "FETCH_RESULTS";

export const addToFavouritesAction = data => ({ type: ADD_TO_FAVOURITES, payload: data });
export const removeToFavouritesAction = index => ({ type: DELETE, payload: index });

export const getCompanyAction = params => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_RESULTS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = query => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_RESULTS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
