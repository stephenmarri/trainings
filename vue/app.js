//* Refs in Vue
let one = new Vue({
    el: "#vue-app-one",
    data: {
        output: "Your fav food"
    },
    methods:{
        getRef:function(){
            this.output = this.$refs.input.value;
        }
    }
})
 