<template>
  <div>
    <slot name="app"></slot>

     <slot name="footer" testProps="子组件的值">
          <h3>没传footer插槽</h3>
    </slot>
  </div>
</template>

<script>
    export default {
        name:"Index"
    }
</script>

<style>

</style>