<template>
  <div>
    <h3>Hey!</h3>
    <hello :age="age" />
    <user :age="age" @age-change="age++" :ageChangeFn="updateAgeCB" />
    <!-- <button type="button" @click="age++">Update Age</button> -->
  </div>
</template>

<script>
import Hello from "./components/Hello";
import User from "./components/User";
export default {
  name: "App",
  components: {
    Hello,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>

<style></style>
