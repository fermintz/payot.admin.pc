<template>
  <div class="wrap">
    <side />
    <div class="container">
      <headers />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap{
  background:#f5f5f7;
  min-height:100vh;
  height:100%;
  padding-left:240px;

  .container{ 
    padding:0 40px 40px 40px;
  }
}
</style>