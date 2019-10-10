<template>
    <div>
        {{nameGenerated}}
        <vue-name-generator v-model="nameGenerated">
        </vue-name-generator>
    </div>
</template>

<script>
import vueNameGenerator from "../vue-name-generator.vue";
export default{
    data(){
        return{
            nameGenerated:"no name"
        }
    },
    components: {
        vueNameGenerator
    }
}
</script>