<script setup lang="ts">
type WritterImagePropsType = {
  // NOTE: Image props 또한 생겨야함
  styleClass?: 'detailImage' | 'settingImage' | 'userImage';
};
const { styleClass = 'detailImage' } =
  defineProps<WritterImagePropsType>();
</script>

<template>
  <div class="writter-image" :class="[styleClass]">
    <img
      src="@assets/img/mokup_blog_user_image.svg"
      alt="user-image"
    />
  </div>
</template>

<style scoped lang="scss">
// 작성자 or 사용자 image
.writter-image {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10rem;
  transition: transform 0.3s ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.detailImage {
  width: 108px;
  height: 108px;
  &:hover {
    transform: scale(1.1);
  }
}

.settingImage {
  width: 128px;
  height: 128px;
}
</style>
