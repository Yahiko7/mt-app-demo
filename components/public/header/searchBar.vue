<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input 
            placeholder="搜索商家或地点"
            v-model="search" @focus="focus" @blur="blur"></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd>珠海长隆海洋王国</dd>
            <dd>诚丰影城</dd>
            <dd>诚丰影城</dd>
            <dd>诚丰影城</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
            <dd>火锅</dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,idx) in hotPlace"
            :key="idx"
            :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item }}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isFocus: false,
      search: '',
      hotPlace: ['珠海长隆海洋王国']
    }
  },
  watch: {
    search: function(newVal,oldVal){
      console.log("newVal:",newVal)
      console.log("oldVal:",oldVal)
    }
  },
  computed:{
    isHotPlace(){
      return this.isFocus && !this.search
    },
    isSearchList(){
      return this.isFocus && this.search
    }
  },
  
  methods: {
    focus(){
      this.isFocus = true;
    },
    blur(){
      setTimeout( () => {
        this.isFocus = false;
      },100)
    }
  }
};
</script>
<style lang="css">
</style>