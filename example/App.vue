<template>
  <div>
    <input type="text" :value="nameGenerated" />
    <vue-name-generator
      v-model="nameGenerated"
      color="grey"
      width="15px"
      height="15px"
      :files="['./assets/adjectives', './assets/names']"
      noSpace
      maxlength="50"
      separator="-"
      icon="mdi-autorenew"
    />
  </div>
</template>

<script>
import vueNameGenerator from "../src/vue-name-generator.vue";
export default {
  data() {
    return {
      nameGenerated: "no name"
    };
  },
  components: {
    vueNameGenerator
  }
};
</script>