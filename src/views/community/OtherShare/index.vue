<template>
  <div class="other-share">
    <Header></Header>
    <div class="container-other">
      <div class="box-other-share">
        <Essay></Essay>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Essay from "@/components/community/Essay.vue";
export default {
  components: {
    Header,
    Essay,
  },
};
</script>

<style lang="less">
@bgcolor: rgb(243, 243, 229);
.container-other {
  margin: 0 auto;
  background-color: @bgcolor;
  padding-top: 10px;
  .box-other-share {
    width: 600px;
    margin: 0 auto;
  }
}
</style>