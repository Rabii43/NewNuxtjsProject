<template>
  <div class="color">
        <section id="contact-us">
          <contact />
        </section>

      <v-container>
        <main-footer />
      </v-container>
    </div>

</template>

<style scoped lang="scss">
.color{

  //background-image: url("");

}
@function section-margin($margin) {
  @return $margin * 15;
}
#news {
  background: #f5f5f5;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  padding-top: section-margin($spacing1);
}
.pad-bottom {
  padding-bottom: section-margin($spacing1);
}
.pad-top {
  padding-top: section-margin($spacing1);
}
.container-wrap {
  // margin-top: $spacing7;
  margin-top: 60px;
  & > section {
    position: relative;
  }
}

#technology {

  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<script>


import Contact from "~/components/Contact";
import Footer from "~/components/Footer";


export default {
  components: {
    Contact,
    "main-footer": Footer,
  },
  methods:{

  },

};
</script>
