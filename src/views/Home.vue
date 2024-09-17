<script setup lang="ts">
import BlogItemBox from '@components/web/box/BlogItemBox.vue';

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const mokup_blog_item_list = [
  {
    title: 'test 1',
    sub_title:
      'sub test 1 sub test 1 sub test 1 sub test 1 sub test 1sub test 1sub test 1 sub test 1sub test 1 sub test 1sub test 1 sub test 1sub test 1sub test 1 sub test 1sub test 1sub test 1 sub test 1 sub test 1 sub test 1sub test 1sub test 1sub test 1sub test 1v sub test 1v sub test 1 sub test 1 vsub test 1 sub test 1 sub test 1 vv sub test 1vsub test 1vvvvv sub test 1sub test 1sub test 1 v vsub test 1 vsub test 1sub test 1sub test 1sub test 1 sub test 1 sub test 1sub test 1 v sub test 1vsub test 1 sub test 1 sub test 1sub test 1v  sub test 1 sub test 1sub test 1 sub test 1sub test 1sub test 1v sub test 1sub test 1 sub test 1  sub test 1sub test 1sub test 1sub test 1sub test 1v v',
    current_date: '2024-09-24',
    comment_count: 9,
    nickName: 'foolish',
    writer: 'Lee unhak',
    like_count: 190,
  },
  {
    title: 'test 2',
    sub_title: 'sub test 2',
    current_date: '2024-04-24',
    comment_count: 123,
    nickName: 'foolish',
    writer: 'Lee unhak',
    like_count: 12130,
  },
];
</script>
<template>
  <main>
    <section class="main-list--container">
      <div v-for="item in mokup_blog_item_list">
        <BlogItemBox :mokup_blog_item_list="item" />
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.main-list--container {
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 1919px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }

  @media (max-width: 1439px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }

  @media (max-width: 1056px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
}
</style>
