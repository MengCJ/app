<template>
  <div>
    <h1>作用域插槽：</h1>
    <slot name="three" testProps="子组件的值">
        <div>我是子组件3的值</div>
    </slot>
  </div>
</template>

<script>
    export default {
        name:'Child3'
    }
</script>

<style>

</style>