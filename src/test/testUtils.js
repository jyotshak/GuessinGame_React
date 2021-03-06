import {createStore,applyMiddleware} from 'redux';
import checkPropTypes from 'check-prop-types';

import rootReducer from '../reducers';
import {middlewares} from '../configureStore'

export const storeFactory= (initialState) =>{
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Throw error if conformingProps do not pass propTypes validation.
 * @param {React.component} component - Component to check props against.
 * @param {object} conformingProps - Props we expect to conform to defined propTypes.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}