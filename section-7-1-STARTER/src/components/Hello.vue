<template>
  <p>
    {{ msg }}
  </p>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      msg: "hello world!",
    };
  },
};
</script>

<style scoped>
    p{
        color:red;
    }
</style>
