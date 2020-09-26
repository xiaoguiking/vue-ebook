<template>
  <div class="ebook">
    <ebook-reader></ebook-reader>
  </div>
</template>

<script>
import EbookReader from "../../components/ebook/EbookReader";
export default {
  components: {
    EbookReader
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/styles/global.less";
</style>
