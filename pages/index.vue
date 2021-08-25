<template>
<div>

    <div class="pagemain" >

        <Page/>


        <contact/>


    </div>


  <main-footer/>
</div>



</template>

<style scoped lang="scss">
.pagemain{

  flex-wrap: nowrap;
  width: 100%;
  height: 94vh;
  background:  url('/images/Groupe de masques 1.png') ;
  background-size:cover ;
  opacity: 300%;

  border-image-repeat: stretch;

}
</style>

<script>


import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Page from "~/components/Landingpage";

export default {
  components: {
    Contact,
    Page,
    "main-footer": Footer,
  },
  methods: {},

};
</script>
