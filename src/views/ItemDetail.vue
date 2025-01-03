<script setup lang="ts">
import BasicButton from '@components/web/button/BasicButton.vue';
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
  </main>
</template>

<style scoped lang="scss">
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
  justify-content: center;
  .detailSection-container {
    width: 60%;
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
}
</style>
