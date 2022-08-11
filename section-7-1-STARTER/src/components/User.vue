<template>
  <div>
    <button type="button" @click="onClickAge">Update Age Event</button>
     <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
    <p>The User is {{ age }} years old</p>
    <p>{{ ageDoubled }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      required: true,
      default:20,
      validator(value){
        //   this.$onClickAge()
          return value < 120
      }
    },
    ageChangeFn: Function
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change");
    },
  },
};
</script>

<style></style>
