<template>
  <i class="nameGenIcon" :style="iconColor" @click="generateName()"
    ><tag-plus-icon :width="width" :height="height"
  /></i>
</template>

<style lang="scss" scoped>
.nameGenIcon{
    cursor: pointer;
    color: gray;
    top: 0.2em;
    position: relative;
    ::before{
      display:none;
    }
}
</style>

<script>
import tagPlusIcon from "mdi-vue/TagPlus"; // works without an extension too
export default {
  data() {
    return {
      name: "",
      parts: []
    };
  },
  props: {
    color: {
      type: String,
      default: "gray"
    },
    width: {
      type: String,
      default: "15px"
    },
    height: {
      type: String,
      default: "15px"
    },
    files: {
      type: Array,
      default: function() {
        return ["./assets/adjectives", "./assets/names"];
      }
    },
    maxLength: {
      type: Number,
      default: 30
    },
    noSpace: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: "-"
    }
  },
  computed: {
    iconColor() {
      return "color: " + this.color;
    }
  },
  components: { tagPlusIcon },
  mounted() {
    this.loadFiles();
  },
  methods: {
    generateName() {
      console.log("Name generation");
      this.name = "";
      for (var file in this.parts) {
        if (file !== "0") this.name += this.separator;
        var randomLine = Math.floor(
          Math.random() * Math.floor(this.parts[file].length)
        );
        this.name += this.returnName(this.parts[file][randomLine]);
      }
      console.log({ name: this.name });
      this.$emit("input", this.name.substring(0, this.maxLength));
    },
    async loadFiles() {
      for (var key in this.files) {
        var response = await fetch(this.files[key]);
        var text = await response.text();
        let lines = text.split("\n");
        this.parts[key] = [];
        for (var lineNumber in lines) this.parts[key].push(lines[lineNumber]);
      }
      console.log({ parts: this.parts });
    },
    returnName(line) {
      return this.noSpace
        ? line
            .toLowerCase()
            .trim()
            .replace(/\s/g, "")
        : this.parts[file][randomLine].toLowerCase().trim();
    }
  }
};
</script>