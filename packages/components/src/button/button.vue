<template>
  <button class="lol-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
  import "./style/index.less";
  import { computed } from "vue";
  defineOptions({name:"lol-button"})
  type ButtonProps = {
    type?: string;
  };
  const buttonProps = defineProps<ButtonProps>();

  const buttonStyle = computed(() => {
    return { [`lol-button--${buttonProps.type}`]: buttonProps.type };
  });
</script>

<style scoped>

</style>
