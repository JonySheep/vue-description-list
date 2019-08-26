<template>
  <b-row class="description-group">
    <slot style="width: 100%"></slot>
  </b-row>
</template>

<script>
export default {
  name: 'DescriptionGroup',
};
</script>

<style scoped>
.description-group {
  width: 98%;
  margin: 1%;
  border: #e2e2e2 1px solid;
}
</style>
