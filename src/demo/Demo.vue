<template>
  <div>
    <DescriptionGroup>
      <DescriptionItem :label="'name'">Hannibal</DescriptionItem>
      <DescriptionItem :label="'email'">Hannibal@gmail.com</DescriptionItem>
    </DescriptionGroup>
  </div>
</template>

<script>
  import DescriptionGroup from '../components/DescriptionGroup'
  import DescriptionItem from '../components/DescriptionItem'
    export default {
      name: "Demo",
      components: {
        DescriptionGroup,
        DescriptionItem
      },
      data() {
        return {

        }
      }
    }
</script>

<style scoped>

</style>
