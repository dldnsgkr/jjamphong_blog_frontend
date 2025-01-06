<script setup lang="ts">
import BeSideRoutingBox from '@components/web/box/BeSideRoutingBox.vue';
import BasicButton from '@components/web/button/BasicButton.vue';
import InputButton from '@components/web/button/InputButton.vue';
import Contour from '@components/web/Contour.vue';
import BasicTextArea from '@components/web/input/BasicTextArea.vue';
import LinkTag from '@components/web/tag/LinkTag.vue';
</script>

<template>
  <main class="detail-container">
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
      <InputButton text="팔로우" animationtype="bright" />
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  width: 60%;
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
}
</style>
