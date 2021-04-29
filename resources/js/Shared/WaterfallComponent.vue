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
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="item.imageId"
    >
      <div class="container mx-auto py-4">
        <img
          :src="item.urls.regular"
          :alt="item.altText"
          @click="goToImage(item)"
        />
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
  props: {
    items: {},
    searchResult: String,
  },
  data() {
    return {
      line: "v",
    };
  },
  methods: {
    goToImage(e) {
      let tmp = window.location.pathname.split("/")[1];
      if (tmp === "search") {
        window.location.href = "media/create?imageId=" + e.imageId;
      } else if (tmp === "media") {
        window.location.href = "media/" + e.id + "/edit";
      }
    },
  },
};
</script>

<style scoped></style>
