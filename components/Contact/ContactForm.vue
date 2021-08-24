<template>
  <div class="contact-wrap">
    <v-container class="elevation-17">

        <v-row>
          <v-col cols="12" lg="6">
            <div class="feature-list">
              <div>
                <p>{{ contact.titre }}</p>
                <h5 v-html="contact.description"></h5>
                <h6>{{ contact.SousTitre }}</h6>
                <!-- <ul> -->
                <p v-html="contact.InfoContact"></p>
                <!-- <li>Fax : +33 123654789</li>
              <li>Email : superstream@contact-us.com</li>
            </ul> -->
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <form>
              <div class="wrap-items mb-4">
                <v-text-field
                  :color="customColor"
                  class="contact-field field-wrapped"
                  v-model="name"
                  :error-messages="nameErrors"
                  label="Full Name*"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
                <v-text-field
                  :color="customColor"
                  class="contact-field field-wrapped"
                  v-model="phone"
                  :error-messages="phoneErrors"
                  label="Phone"
                  required
                  @input="$v.phone.$touch()"
                  @blur="$v.phone.$touch()"
                ></v-text-field>
              </div>
              <div class="wrap-items">
                <v-text-field
                  :color="customColor"
                  class="contact-field field-wrapped"
                  v-model="company"
                  :error-messages="companyErrors"
                  label="Company*"
                  required
                  @input="$v.company.$touch()"
                  @blur="$v.company.$touch()"
                ></v-text-field>
                <v-text-field
                  :color="customColor"
                  class="contact-field field-wrapped"
                  v-model="position"
                  :error-messages="positionErrors"
                  label="Position"
                  required
                  @input="$v.position.$touch()"
                  @blur="$v.position.$touch()"
                ></v-text-field>
              </div>
              <v-text-field
                :color="customColor"
                class="contact-field"
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-textarea
                :color="customColor"
                class="contact-field"
                v-model="message"
                :error-messages="messageErrors"
                label="Message"
                required
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>
              <v-checkbox
                :color="customColor"
                v-model="subscribe"
                label="Subscribe me to the newsletter"
                @input="$v.check.$touch()"
                @blur="$v.check.$touch()"
              ></v-checkbox>
              <v-btn text class="submit mt-4 px-16 py-5" @click="submit">
                Send
              </v-btn>
              <v-snackbar
                class="snackbar"
                v-model="snack"
                :timeout="3000"
                :color="status ? '#4ca896' : '#ed4337'"
                elevation="24"
              >
                {{ status ? msgSuccess : msgError }}

                <template v-slot:action="{ attrs }">
                  <v-btn text v-bind="attrs" @click="snack = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </template>
              </v-snackbar>
            </form>
          </v-col>
        </v-row>

    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import "./contact-style";
</style>
<style lang="scss">
.contact-wrap {

  .v-input--selection-controls__input .v-icon {
    color: #fff !important;
  }

  .theme--light.v-label,
  .v-label--active {
    color: #fff !important;
    font-size: 14px !important;
  }

  .v-text-field--outlined.v-input--is-focused fieldset,
  .v-text-field--outlined.v-input--has-state fieldset {
    border-color: #ffffffde !important;
  }

  .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: #ffffffde !important;
  }

  .theme--light.v-input input,
  .theme--light.v-input textarea {
    color: #ffffffde !important;
  }

  .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
    background: #ffffff03 !important;
  }

  .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
    color: #ffffffde !important;
  }

  .v-application .primary--text {
    color: #ffffff !important;
    caret-color: #ffffffde !important;
  }

  .v-input input:focus,
  .v-input input:active,
  .v-input textarea:focus,
  .v-input textarea:active {
    outline: unset !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 30px #142e54 inset !important;
    -webkit-text-fill-color: #fff;
  }

  .theme--light.v-btn {
    color: #fff !important;
  }
}
</style>
<script>
import {validationMixin} from "vuelidate";
import {required, maxLength, email, numeric} from "vuelidate/lib/validators";


export default {

  name: "contact",
  mixins: [validationMixin],

  validations: {
    name: {required},
    phone: {required, numeric},
    company: {required},
    position: {required},
    email: {required, email},
    message: {required},
  },
  data() {
    return {
      name: "",
      phone: "",
      company: "",
      position: "",
      email: "",
      message: "",
      subscribe: true,
      customColor: "#fff",
      snack: false,
      status: false,
      msgSuccess: "your message has been sent successfully",
      msgError: "Please fill all the required fields",
    };
  },

  mounted() {
    this.getInfo();
  },

  methods: {
    getInfo() {
      this.$store.dispatch("contact/getContact");
    },

    sendContact() {
      this.$store.dispatch("contact/sendContact", {
        name: this.name,
        phone: this.phone,
        company: this.company,
        subscribe: this.subscribe,
        poqition: this.position,
        email: this.email,
        message: this.message,
      });
    },

    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) {
        this.status = false;
        this.snack = true;
        return;
      }
      this.status = true;
      this.sendContact();
      this.snack = true;
      this.name = "";
      this.email = "";
      this.message = "";
      this.phone = "";
      this.company = "";
      this.position = "";
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },

  computed: {
    contact() {
      return this.$store.getters["contact/getContact"];
    },

    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.email.numeric && errors.push("Must be valid phone number");
      !this.$v.phone.required && errors.push("Phone is required.");
      return errors;
    },
    companyErrors() {
      const errors = [];
      if (!this.$v.company.$dirty) return errors;
      !this.$v.company.required && errors.push("Company is required.");
      return errors;
    },
    positionErrors() {
      const errors = [];
      if (!this.$v.position.$dirty) return errors;
      !this.$v.position.required && errors.push("Position is required.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.required && errors.push("Message is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },
};
</script>
