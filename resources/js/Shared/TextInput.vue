<template>
  <div class="flex flex-col">
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
    <input
      :id="id"
      ref="input"
      v-bind="$attrs"
      class="form-input"
      :class="{ error: error }"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <div v-if="error" class="form-error text-red-500 py-1">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`;
      },
    },
    type: {
      type: String,
      default: "text",
    },
    value: String,
    label: String,
    error: String,
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    },
  },
};
</script>

<style scoped></style>
