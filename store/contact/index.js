import {contact} from "@/api";

export default {
  state() {
    return {
      loading: false,
      contact: {},

    }
  },
  getters: {
    getLoading: state => state.loading,
    getContact: state => state.contact

  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_CONTACT(state, payload) {
      state.contact = payload
    },
  },
  actions: {


    sendContact({dispatch, commit, state, rootState}, payload) {
      let data = {
        "webform_id": "contact",
        "message": payload.message,
        "subject": "SuperStream",
        "company": payload.company,
        "position": payload.position,
        "name": payload.name,
        "email": payload.email
      }

      this.$axios.post(contact, data, {
        headers: {
          "Content-Type": "application/json"
        }
      }).catch(function (err) {
        console.log(err.message)
      });
    }

  }

}
