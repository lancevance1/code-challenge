<template>

<div>


<!--  <button type="button" @click="show = true">-->
<!--    <slot />-->
<!--    <portal v-if="show" to="dropdown">-->
<!--      <div>-->
<!--        <div-->
<!--          style="position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 99998; background: black; opacity: .2"-->
<!--          @click="show = false"-->
<!--        />-->
<!--        <div-->
<!--          ref="dropdown"-->
<!--          style="position: absolute; z-index: 99999;"-->
<!--          @click.stop="show = autoClose ? false : true"-->
<!--        >-->
<!--          <slot name="dropdown" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </portal>-->
<!--  </button>-->

  <popper
    trigger="clickToOpen"
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,10px' } }
    }">
    <div class="popper">
      <LoginMenu></LoginMenu>
    </div>
 
    <button slot="reference">
     <div class="text-lg ">{{ $page.props.auth.user.name||'Guest' }}</div>
    </button>
  </popper>
</div>
</template>

<script>
// esm
import { createPopper } from "@popperjs/core";
import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';
import LoginMenu from "./LoginMenu";

export default {
  props: {
    placement: {
      type: String,
      default: "bottom-end",
    },
    boundary: {
      type: String,
      default: "scrollParent",
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    show(show) {
      if (show) {
      

        console.log(this.$refs);
        console.log(this.placement);
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100);
      }
    },
  },
  components: {
    LoginMenu,
      'popper': Popper,

    },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.show = false;
      }
    });
  },
};
</script>
