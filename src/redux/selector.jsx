import { createSelector } from 'reselect';

const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartState],
  (cart) => cart.map(item => ({ ...item })) // Ensuring we are transforming the items for memoization purposes
);
