<template>
  <div class="ebook-reader">
    {{ $route.params.fileName }}
    <div class="read"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const fileName = this.$route.params.fileName;
    console.log(fileName);
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
</style>
