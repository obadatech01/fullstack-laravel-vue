<template>
  <div>
    <h1 ref="myref">Hook tutorial</h1>
    <p>My name is: {{name}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'obada'
        }
    },
    mounted() {
        console.log(this.$refs.myref)
    }
}
</script>

<style>

</style>
