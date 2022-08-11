<template>
  <h1>
      homepage
  </h1>
</template>

<script>
export default {
    name:"HomeComp",
    unmounted(){
        console.log('This was unmounted');
    },
    activated(){
        console.log("Home component acivated");
    },
    deactivated(){
        console.log("Home component deacivated");
    },
}
</script>

<style>

</style>