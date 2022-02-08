<template>
  <div class="container">
    <div>{{ count }}</div>
    <el-button @click="onAdd">add</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    onAdd() {
      this.count += 1;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: blue;
}
</style>
