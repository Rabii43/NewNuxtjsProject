<template>
  <v-row  class="footer">
   <v-col > <v-img src="/images/Groupe 453.png" alt="" class="img"/></v-col>
    <v-col > <p class="style">{{ adress }}</p></v-col>

    <v-col> <v-img src="/images/Groupe 453.png" alt="" class="img"/></v-col>
    <v-col > <p class="style">{{ adress }}</p></v-col>


  </v-row>
</template>

<style scoped lang="scss">
@import "./footer-style";
.img {

  max-width: 15px;
  max-height: 21px;
  height: auto;
  width:auto ;
}
.style{
  //flex: auto;


}
</style>

<script>



export default {
  data: () => ({

    adress: "5 Rue Maurice Bourdet, 75016 Paris",
    lang: "en",

  }),
  mounted() {
    this.lang = this.$i18n.locale;
  },
  computed: {},
  methods: {},
};
</script>
