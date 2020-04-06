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
      maxLength="50"
      separator="-"
      icon="mdi-autorenew"
    />
  </div>
</template>

<script>
import vueNameGenerator from "../vue-name-generator.vue";
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