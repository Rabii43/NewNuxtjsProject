<template>
  <div  class="footer">
    <p class="body-5 copyright">
      {{adress }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "./footer-style";
</style>

<script>
import logo from "~/static/images/starter-logo.svg";


export default {
  data: () => ({
    logo: logo,
    adress: "5 Rue Maurice Bourdet, 75016 Paris",
    lang: "en",

  }),
  mounted() {
    this.lang = this.$i18n.locale;
  },
  computed: {

  },
  methods: {
  },
};
</script>
