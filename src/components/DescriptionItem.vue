<template>
  <b-col :cols="span">
      <b-row class="item">
          <b-col class="text label-background" :cols="24/span">
            <strong>{{upperCaseLabel}}</strong>
          </b-col>
          <b-col class="text">
            <slot></slot>
          </b-col>
      </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'DescriptionItem',
  mounted() {
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    span: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    upperCaseLabel() {
      return this.label.split('_').map(l => l.charAt(0).toUpperCase() + l.slice(1)).join(' ');
    },
  },
};
</script>

<style scoped>
  .item {
    font-size: 14px;
    height: 3.5rem;
    border-bottom: #e2e2e2 1px solid;
  }
  .label-background {
    background-color: #e9ecef;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
