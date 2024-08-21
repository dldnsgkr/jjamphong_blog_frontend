<script setup></script>
<template>
  <div class="blog-item-wrapper">
    <img />
    <div class="blog-item-text">
      <div>
        <p>title title title title</p>
        <span>subtitle subtitle</span>
      </div>
      <div></div>
    </div>
    <div class="blog-item-information">
      <div>
        <div class="writer-image"></div>
        <div class="writer-name"></div>
      </div>
      <div>
        <div class="like-value"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.blog-item-wrapper {
  display: flex;
  flex-direction: column;
  .blog-item-text {
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
  .blog-item-information {
    display: flex;
    justify-content: space-between;
  }
}
</style>
