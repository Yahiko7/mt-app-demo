<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd 
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in cur" :key="index">
        <el-card 
          :body-style="{ padding: '0px' }" 
          shadow="never">
          <img :src="item.img" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      list: {
        all: [
          {
            title: '峡骨烧',
            img: 'https://p0.meituan.net/msmerchant/7794cfcb25ed4c2a0d81205a87454bdd44049.jpg@368w_208h_1e_1c',
            pos: '【虾骨烧】招牌骨煲四人套餐',
            price: '¥346'
          },
          {
            title: '峡骨烧',
            img: 'https://p0.meituan.net/msmerchant/7794cfcb25ed4c2a0d81205a87454bdd44049.jpg@368w_208h_1e_1c',
            pos: '【虾骨烧】招牌骨煲四人套餐',
            price: '¥346'
          },
          {
            title: '峡骨烧',
            img: 'https://p0.meituan.net/msmerchant/7794cfcb25ed4c2a0d81205a87454bdd44049.jpg@368w_208h_1e_1c',
            pos: '【虾骨烧】招牌骨煲四人套餐',
            price: '¥346'
          },
          {
            title: '峡骨烧',
            img: 'https://p0.meituan.net/msmerchant/7794cfcb25ed4c2a0d81205a87454bdd44049.jpg@368w_208h_1e_1c',
            pos: '【虾骨烧】招牌骨煲四人套餐',
            price: '¥346'
          }
        ],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    cur() {
      return this.list[this.kind];
    }
  },
  methods: {
    over(e){
      console.log(e.target.tagName)
      let dom = e.target
      let tag = e.target.tagName.toLowerCase();
      if(tag == "dd"){
        let keyword = dom.getAttribute('keyword')
        this.kind = dom.getAttribute('kind');
        console.log("this.kind:",this.kind) 
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
