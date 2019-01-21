<template>
  <div>
    <el-row :gutter="0" class="m-header">
      <el-col :span="5">
        <geo/>
      </el-col>
      <el-col :span="4">
        <user/>
      </el-col>
      <el-col :span="12">
        <nav-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from "./geo.vue";
import User from "./user.vue";
import NavBar from "./nav.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    Geo,
    User,
    NavBar,
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/header/index.scss";
</style>

