/* global sessionStorage */
import { STEPPER_FORM_DATA_KEY } from '../constants';

export default (formData: any) => {
  sessionStorage.setItem(STEPPER_FORM_DATA_KEY, JSON.stringify(formData));
};
