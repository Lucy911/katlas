//TODO:DM - this file feels overly anti-DRY... investigate if better way to track action type names or maybe just use strings directly

export const SUBMIT_QUERY = 'SUBMIT_QUERY';
export const REQUEST_QUERY = 'REQUEST_QUERY';
export const RECEIVE_QUERY = 'RECEIVE_QUERY';
export const REQUEST_METADATA = 'REQUEST_METADATA';
export const RECEIVE_METADATA = 'RECEIVE_METADATA';
export const UPDATE_QUERY_PAGINATION = 'UPDATE_QUERY_PAGINATION';

export const SET_ROOT_UID = 'SET_ROOT_UID';
export const ADD_WATCH_UID = 'ADD_WATCH_UID';
export const FETCH_ENTITY = 'FETCH_ENTITY';
export const FETCH_ENTITIES = 'FETCH_ENTITIES';
export const RECEIVE_ENTITY = 'RECEIVE_ENTITY';
export const ADD_WATCH_QSL_QUERY = 'ADD_WATCH_QSL_QUERY';
export const RECEIVE_QSL_RESP = 'RECEIVE_QSL_RESP';
export const CLEAR_WATCHES = 'CLEAR_WATCHES';

export const SHOW_NOTIFY = 'SHOW_NOTIFY';