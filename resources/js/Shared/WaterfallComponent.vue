<template>
  <!-- line gap 600 for 3 lines -->
  <waterfall
      :line="line"
      :line-gap="600"
      :min-line-gap="180"
      :max-line-gap="220"
      :watch="items"
      ref="waterfall"
  >
    <!-- each component is wrapped by a waterfall slot -->
    <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width||300"
        :height="item.height||300"
        :order="index"
        :key="item.id"
    >
      <div class="container mx-auto py-4">
        <img :src="item.urls.regular||item.url_regular" :alt="item.altText" @click="goToCreate(item.id)"/>
      </div>
    </waterfall-slot>
  </waterfall>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
export default {
  name: "WaterfallComponent",
  components: {
    Waterfall,
    WaterfallSlot,
  },
  props:{
    items:{},
    searchResult:String,
  },
data(){
  return{
    line: "v",
  }
},
  methods:{
    goToCreate(e) {
      console.log(e)
      window.location.href = "media/create?imageId=" + e;
    },


  },



}
</script>

<style scoped>

</style>