<template>
  <div class="home">
    <div id="read"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Epub from "epubjs";

global.ePub = Epub;
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  mounted() {
    this.book = new Epub("2018_Book_AgileProcessesInSoftwareEngine.epub");
    console.log(this.book);
    this.book.renderTo("read", {
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
};
</script>
