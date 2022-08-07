const vm = Vue.createApp({
  data() {
    return {
      firstName: "Akorede",
      middleName: "",
      lastName: "Agoro",
      url: "https://google.com",
      raw_url: '<a href="url" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      this.lastName = event.target.value;
      console.log(msg);
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
      },
      
    },
  
    watch: {
        age(newVal,oldVal) {
            setTimeout(() => {
                 this.age=20
             },3000)
      }
  }
}).mount("#app");

// setTimeout(() => {
//     vm.firstName="Emmanuel"
// },2000)
// Vue.createApp({
//     data() {
//         return {
//             firstName: "Damilare",
//             lastName:"Agoro"
//         }
//     }
// }).mount("#app2")
