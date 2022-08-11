<template>
  <div>
    <p v-if="age >= 25">
      {{ msg }}
    </p>
    <p v-else>You must be 25 years or older to view this message</p>

  </div>
</template>

<script>
export default {
  name: "Hello",
  props: ["age"],
  data() {
    return {
      msg: "hello world!",
    };
  },
};
</script>



<style scoped>
p {
  color: red;
}
</style>
