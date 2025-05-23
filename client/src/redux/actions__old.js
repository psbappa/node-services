// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE_AUTH = 'TOGGLE_AUTH';

// Action Creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const toggleAuth = () => ({ type: TOGGLE_AUTH });
