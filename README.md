# Vue Name Generator

Generates a random name from several list of names provided by the user

## Play the demo
To see the demo version:
* Clone the repository
* Install NPM 
* Launch the command npm install
* Launch npm run dev

### Install the component
```npm install vue-name-generator --save```

#### Use vue-name-generator in your component
```
<template>
    <div>
        <input type="text" :value="nameGenerated"/>
        <vue-name-generator v-model="nameGenerated" color="grey" width="15px" height="15px" :files='["./assets/adjectives","./assets/names"]' noSpace separator="-"/>
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
```

##### Component properties

* color: string - (default:grey) color of the icon used to generate the names
* width: string - (default: 15px) width of the icon
* height: string - (default:15px) height of the icon
* files: array - (default: ["./assets/adjectives","./assets/names"]) inputs to generate the name. Each entry provides the relative path to the file. The order define the order in which the parts will be used for names generation. Eg: ```["./assets/adjectives","./assets/names"]```
* noSpace: boolean - (default: true) when true, remove all the spaces from the inputs
* separator: string - (default: -) separate the entry of each of the input files

###### Contributing

We will consider the MRs, so feel free to send some. We will also be happy to consider your feedbacks and comments.

## Authors

* **Aymeric Hermant** - *Initial work* - [VueNameGenerator](https://github.com/ahermant/vue-name-generator/)

See also the list of [contributors](https://github.com/ahermant/vue-name-generator/graphs/contributors) who participated in this project.

## License

This project is licensed under the BSD3 License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Insipred by [vue-json-editor](https://github.com/dirkliu/vue-json-editor) for the component structure
