/* eslint-disable import/prefer-default-export */
import getData from '../utils/getData';

export const getDataProfile = () => (dispatch) => {
  const response = getData();
  dispatch({
    type: 'get_data',
    payload: response,
  });
};
