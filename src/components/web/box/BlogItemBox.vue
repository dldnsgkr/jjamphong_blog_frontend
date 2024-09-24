<script setup lang="ts">
import icon_black_heart from '@assets/icon/icon-black-heart.svg';

type mokup_blog_item_listPropsType = {
  title: string;
  sub_title: string;
  current_date: string;
  img: string;
  comment_count: number;
  nickName: string;
  writer: string;
  like_count: number;
};

const props = defineProps<{
  mokup_blog_item_list: mokup_blog_item_listPropsType;
}>();

// typeScript 기본값 적용을 원할시 부모에서 객체를 분할 시켜서 보내줘야함
// const props = withDefaults(
//   defineProps<mokup_blog_item_listPropsType>(),
//   {
//     title: '',
//     sub_title: '',
//     current_date: '9999-12-31',
//     comment_count: 0,
//     nickName: 'unknown',
//     writer: 'unknown',
//     like_count: 0,
//   }
// );

// js
// const runtimeProps = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   sub_title: {
//     type: String,
//     required: true,
//   },
//   current_date: {
//     type: String,
//     required: true,
//   },
//   comment_count: {
//     type: Number,
//     default: 0,
//   },
//   nickName: {
//     type: String,
//     default: 'unknown',
//   },
//   writer: {
//     type: String,
//     default: 'unknown',
//   },
//   like_count: {
//     type: Number,
//     default: 0,
//   },
// });
</script>
<template>
  <div class="blog-item-wrapper">
    <div class="blog-item-image-wrapper">
      <img
        v-if="props.mokup_blog_item_list.img"
        :src="props.mokup_blog_item_list.img"
        alt="Blog Image"
      />
    </div>
    <div class="blog-item-text">
      <div class="title-wrapper">
        <p class="main-title">
          {{ props.mokup_blog_item_list.title }}
        </p>
        <p class="sub-title">
          {{ props.mokup_blog_item_list.sub_title }}
        </p>
      </div>
      <div class="etc-wrapper">
        <p class="date-comment">
          {{ props.mokup_blog_item_list.current_date }} ·
          {{
            props.mokup_blog_item_list.comment_count.toLocaleString()
          }}개의 댓글
        </p>
      </div>
    </div>
    <div class="blog-item-information">
      <div>
        <div class="writer-image"></div>
        <div class="writer-name">
          <span>by </span>
          <p>
            {{ props.mokup_blog_item_list.nickName }}
            {{ props.mokup_blog_item_list.writer }}
          </p>
        </div>
      </div>
      <div class="like-value">
        <img :src="icon_black_heart" />
        {{
          props.mokup_blog_item_list.like_count.toLocaleString()
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.blog-item-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition:
    transform 250ms,
    box-shadow 0.3s;
  .blog-item-image-wrapper {
    position: relative;
    padding-top: 52.1921%;
    width: 100%;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 0px;
    }
  }
  .blog-item-text {
    height: 9rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title-wrapper {
      margin-bottom: 1.5rem;
      .main-title {
        font-weight: 700;
        font-size: 1.25rem;
      }
      .sub-title {
        width: 100%;
        font-size: 0.9rem;
        color: #495057;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-height: 1.5;
        -webkit-line-clamp: 4;
      }
    }
    .etc-wrapper {
      .date-comment {
        font-size: 0.75rem;
        color: #868e96;
      }
    }
  }
  .blog-item-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-top: 1px solid #f1f3f5;
    .writer-name {
      span {
        font-size: 0.75rem;
        color: #868e96;
      }
      p {
        display: inline;
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
    .like-value {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7px;
      font-size: 13px;
    }
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
