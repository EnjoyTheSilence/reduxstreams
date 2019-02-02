import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT ,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types.js'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    //adds users google id to our db alongside the stream they created
    const response = await streams.post('/streams', { ...formValues , userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push('/')
    //programmatic navigation to direct user back to root route
    //when successful stream create
    //use push to navigate user to where we want to go
      //ex / for root
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data })
};

export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data })
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data })
};

export const deleteStream = (id) => async dispatch => {
  //no response
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM , payload: id })
}
