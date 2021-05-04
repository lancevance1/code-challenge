<template>
  <div>
    <popper
      trigger="clickToOpen"
      :options="{
        placement: 'top',
        modifiers: { offset: { offset: '0,10px' } },
      }"
    >
      <div class="popper">
        <LoginMenu></LoginMenu>
      </div>

      <button slot="reference">
        <div class="text-lg">{{ $page.props.auth.user.name }}</div>
      </button>
    </popper>
  </div>
</template>

<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
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
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100);
      }
    },
  },
  components: {
    LoginMenu,
    popper: Popper,
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
