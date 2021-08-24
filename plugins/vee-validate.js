import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';

import { required, email } from 'vee-validate/dist/rules';

// Add the required rule
extend('required', {
  ...required,
  message: (field) => `${field} is required.`
})
// Add the email rule
extend('email', email)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
