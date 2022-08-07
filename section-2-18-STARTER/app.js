let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size:150
        }
    },
    method() { 

    },
    
    computed: {
        circle_classes() {
           return { purple: this.isPurple }
        }
    }
}).mount('#app')