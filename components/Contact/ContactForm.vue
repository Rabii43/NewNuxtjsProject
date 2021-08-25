<template>


  <div class="contact-wrap ">
    <v-row class="tel">
      <p class="style">
        <v-img src="/images/call.png" class="img"/>
        01 46 51 41 46
      </p>


    </v-row>
    <v-row class=" contact-box">


    </v-row>


  </div>

</template>

<style scoped lang="scss">
@import "./contact-style";

.img {
  float: left;
  width: auto;
  height: auto;
}
.style{
 margin: auto;
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
