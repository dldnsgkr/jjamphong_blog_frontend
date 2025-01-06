<script setup lang="ts">
import BlogItemBox from '@components/web/box/BlogItemBox.vue';
import BlogItemBoxSkeleton from '@components/web/skeleton/BlogItemBoxSkeleton.vue';
import mokup_image1 from '@assets/img/mokup_blog_item.png';
import mokup_image2 from '@assets/img/mokup_blog_item2.png';
import mokup_image3 from '@assets/img/mokup_blog_item3.png';

const mokup_blog_item_list = [
  {
    id: 1,
    title: 'test 1',
    sub_title:
      'sub test 1 sub test 1 sub test 1 sub test 1 sub test 1sub test 1sub test 1 sub test 1sub test 1 sub test 1sub test 1 sub test 1sub test 1sub test 1 sub test 1sub test 1sub test 1 sub test 1 sub test 1 sub test 1sub test 1sub test 1sub test 1sub test 1v sub test 1v sub test 1 sub test 1 vsub test 1 sub test 1 sub test 1 vv sub test 1vsub test 1vvvvv sub test 1sub test 1sub test 1 v vsub test 1 vsub test 1sub test 1sub test 1sub test 1 sub test 1 sub test 1sub test 1 v sub test 1vsub test 1 sub test 1 sub test 1sub test 1v  sub test 1 sub test 1sub test 1 sub test 1sub test 1sub test 1v sub test 1sub test 1 sub test 1  sub test 1sub test 1sub test 1sub test 1sub test 1v v',
    current_date: '2024-09-24',
    img: mokup_image1,
    comment_count: 9,
    nickName: 'foolish',
    writer: 'Lee unhak',
    like_count: 190,
  },
  {
    id: 2,
    title: 'test 2',
    sub_title: 'sub test 2',
    current_date: '2024-04-24',
    img: mokup_image2,
    comment_count: 123,
    nickName: 'foolish',
    writer: 'Lee unhak',
    like_count: 12130,
  },
  {
    id: 3,
    title: 'test 2',
    sub_title: 'sub test 2',
    current_date: '2024-04-24',
    img: mokup_image3,
    comment_count: 123,
    nickName: 'foolish',
    writer: 'Lee unhak',
    like_count: 12130,
  },
];
</script>
<template>
  <main>
    <section class="list-container">
      <div v-for="item in mokup_blog_item_list">
        <BlogItemBox :mokup_blog_item_list="item" />
      </div>
      <BlogItemBoxSkeleton />
      <BlogItemBoxSkeleton />
      <BlogItemBoxSkeleton />
      <BlogItemBoxSkeleton />
      <BlogItemBoxSkeleton />
      <BlogItemBoxSkeleton />
    </section>
  </main>
</template>
<style lang="scss" scoped></style>
