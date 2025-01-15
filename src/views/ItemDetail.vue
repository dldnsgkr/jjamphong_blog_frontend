<script setup lang="ts">
import BeSideRoutingBox from '@components/web/common/button/BeSideRoutingButton.vue';
import BasicButton from '@components/web/common/button/BasicButton.vue';
import InputButton from '@components/web/common/button/InputButton.vue';
import Contour from '@components/web/Contour.vue';
import BasicTextArea from '@components/web/common/input/BasicTextArea.vue';
import LinkTag from '@components/web/common/tag/LinkTag.vue';
import BlogItemBox from '@components/web/common/box/BlogItemBox.vue';
import BlogItemBoxSkeleton from '@components/web/common/skeleton/BlogItemBoxSkeleton.vue';
import mokup_image1 from '@assets/img/mokup_blog_item.png';
import mokup_image2 from '@assets/img/mokup_blog_item2.png';
import mokup_image3 from '@assets/img/mokup_blog_item3.png';
import FloatArea from '@components/web/FloatArea.vue';
import Heart from '@components/web/common/icon/Heart.vue';
import { reactive, ref } from 'vue';
import Share from '@components/web/common/icon/Share.vue';
import Instagram from '@components/web/common/icon/Instagram.vue';
import Slack from '@components/web/common/icon/Slack.vue';
import Discord from '@components/web/common/icon/Discord.vue';
import Github from '@components/web/common/icon/Github.vue';
import Phone from '@components/web/common/icon/Phone.vue';
import Facebook from '@components/web/common/icon/Facebook.vue';
import Email from '@components/web/common/icon/Email.vue';

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
const hover = reactive({
  like: false,
  share: false,
  discord: false,
  github: false,
  phone: false,
  facebook: false,
  email: false,
  slack: false,
  instagram: false,
});
</script>

<template>
  <main class="detail-container">
    <FloatArea :top="'35%'" :left="'85%'"
      >asfasfsdfsdfd</FloatArea
    >
    <FloatArea :top="'35%'" :right="'85%'"
      ><div class="like-share-floatContainer">
        <div
          class="floatContainer-button"
          @mouseover="hover.like = true"
          @mouseleave="hover.like = false"
        >
          <Heart
            :fillColor="
              hover.like ? 'black' : 'rgba(0, 0, 0, 0.5)'
            "
          />
        </div>
        <p>0</p>
        <div
          class="floatContainer-button"
          @mouseover="hover.share = true"
          @mouseleave="hover.share = false"
        >
          <Share
            :fillColor="
              hover.share ? 'black' : 'rgba(0, 0, 0, 0.5)'
            "
          />
        </div></div
    ></FloatArea>
    <section class="detailSection-container">
      <h1 class="title">
        제목입니다. 제목입니다. 제목입니다. 제목입니다.
        제목입니다.
      </h1>
      <div class="detailSection-subContainer">
        <div class="writter-info-container">
          <div class="writter-info">
            <p class="writter">lee un hak</p>
            ·
            <p class="written-date">2025년 01월 04일</p>
          </div>
          <BasicButton text="팔로우" class="grassButton" />
        </div>
        <div class="tag-container">
          <LinkTag text="Vue" link="/asdf" />
        </div>
      </div>
    </section>
    <section class="advertisement-container">
      <div style="width: 60%">
        <div
          class=""
          style="height: 300px; background-color: black"
        ></div>
      </div>
    </section>
    <section></section>
    <section class="contents-footer">
      <div class="footer-first-container">
        <div class="footer-writter-info">
          <div class="writter-image">
            <img
              class=""
              src="@assets/img/mokup_blog_user_image.svg"
              alt="user-image"
            />
          </div>
          <p class="writter">lee un hak</p>
        </div>
        <BasicButton text="팔로우" class="grassButton" />
      </div>
      <Contour />
      <div class="contect-writter-container">
        <Instagram
          :isHover="hover.instagram"
          @mouseover="hover.instagram = true"
          @mouseleave="hover.instagram = false"
        />
        <Slack
          :isHover="hover.slack"
          @mouseover="hover.slack = true"
          @mouseleave="hover.slack = false"
        />
        <Discord
          :fillColor="
            hover.discord
              ? '#5865f2'
              : 'rgba(88, 101, 242, 0.5)'
          "
          @mouseover="hover.discord = true"
          @mouseleave="hover.discord = false"
        />
        <Github
          :fillColor="
            hover.github ? 'black' : 'rgba(0, 0, 0, 0.5)'
          "
          @mouseover="hover.github = true"
          @mouseleave="hover.github = false"
        />
        <Phone
          :fillColor="
            hover.phone ? 'black' : 'rgba(0, 0, 0, 0.5)'
          "
          @mouseover="hover.phone = true"
          @mouseleave="hover.phone = false"
        />
        <Facebook
          :fillColor="
            hover.facebook
              ? '#1877f2'
              : 'rgba(24, 119, 242, 0.5)'
          "
          @mouseover="hover.facebook = true"
          @mouseleave="hover.facebook = false"
        />
        <Email
          :fillColor="
            hover.email ? 'black' : 'rgba(0, 0, 0, 0.5)'
          "
          @mouseover="hover.email = true"
          @mouseleave="hover.email = false"
        />
      </div>
      <div class="footer-second-container">
        <BeSideRoutingBox
          title="hahahahahahahahasfsadfasdfasfasdfasdfasdfdfsdafsadfdfsdafasdf"
          align="left"
        />
        <BeSideRoutingBox title="blablabla" align="right" />
      </div>
    </section>
    <section class="comment-container">
      <p class="commentCount">0개의 댓글</p>
      <div class="comment-writing-area">
        <BasicTextArea placeholder="댓글을 작성하세요." />
      </div>
      <InputButton
        text="댓글 작성"
        animationtype="bright"
      />
    </section>
    <section class="interest-post-area">
      <span class="interest-post-title">
        관심 있을 만한 포스트
      </span>
      <div class="list-container">
        <div v-for="item in mokup_blog_item_list">
          <BlogItemBox :mokup_blog_item_list="item" />
        </div>
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
        <BlogItemBoxSkeleton />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  width: 60%;
}
.like-share-floatContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  width: 40px;
  padding: 1rem;
  border-radius: 10rem;
  background-color: #f8f9fa;
  .floatContainer-button {
    display: flex;
    padding: 0.75rem;
    border-radius: 10rem;
    background-color: #fff;
    border: 1px solid #f8f9fa;
    cursor: pointer;
    transition: border 0.2s ease;
    &:hover {
      border: 1px solid black;
    }
  }
}
.title {
  font-size: 3rem;
  line-height: 1.5;
  font-weight: 800;
  margin-bottom: 2rem;

  @media (max-width: 1439px) {
    font-size: 2.5rem;
    line-height: 1.25;
    font-weight: 800;
  }

  @media (max-width: 1056px) {
    font-size: 2rem;
    line-height: 1.25;
    font-weight: 800;
  }
}
.detail-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .detailSection-container {
    @media (max-width: 800px) {
      width: 80%;
    }
    .detailSection-subContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .writter-info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .writter-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          .writter {
            font-weight: 700;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
          .written-date {
            font-weight: 300;
          }
        }
      }
    }
  }
  /** 광고 영역 */
  .advertisement-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    margin-top: 3rem;
  }
  .contents-footer {
    margin-top: 16rem;
    margin-bottom: 6rem;
    .footer-first-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .footer-writter-info {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        .writter-image {
          width: 108px;
          height: 108px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border: solid 1px rgba(0, 0, 0, 0.2);
          border-radius: 10rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          &:hover {
            transform: scale(1.1);
          }
        }
        .writter {
          font-size: x-large;
          font-weight: 700;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .contect-writter-container {
      display: flex;
      align-items: center;
      gap: 2rem;
      width: 100%;
      margin-bottom: 6rem;
    }
    .footer-second-container {
      display: flex;
      width: 100%;
      align-items: center;
      gap: 2%;
    }
  }
  .comment-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    .commentCount {
      margin-bottom: 1rem;
      align-self: self-start;
    }
    .comment-writing-area {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
  .interest-post-area {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    margin-top: 4rem;
    padding: 4rem 0;
    background-color: #f8f9fa;
    box-shadow: rgba(0, 0, 0, 0.04) 0px -16px 16px;
    z-index: 2;
    .interest-post-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 4rem;
    }
  }
}
</style>
