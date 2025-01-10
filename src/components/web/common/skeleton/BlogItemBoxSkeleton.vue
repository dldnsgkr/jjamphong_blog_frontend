<script setup lang="ts"></script>

<template>
  <div class="blog-item-skeleton-wrapper">
    <div class="blog-skeleton-image"></div>
    <div class="blog-item-skeleton-text">
      <div class="title-skeleton-wrapper">
        <p class="main-skeleton-title"></p>
        <div class="sub-skeleton-title-wrapper">
          <p class="sub-skeleton-title"></p>
          <p class="sub-skeleton-title"></p>
          <p class="sub-skeleton-title"></p>
        </div>
      </div>
      <div class="etc-skeleton-wrapper"></div>
    </div>
    <div class="blog-item-skeleton-information">
      <div class="writer-informaiton-skeleton"></div>
      <div class="word-like-skeleton"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.blog-item-skeleton-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;

  // Adding the gradient effect to all skeleton elements
  .skeleton-gradient {
    background: linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 50%,
      #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: gradient-shift 1.5s ease-in-out infinite;
  }

  .blog-skeleton-image {
    position: relative;
    padding-top: 52.1921%;
    width: 100%;
    background-color: #f0f0f0;
    background: linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 50%,
      #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: gradient-shift 1.5s ease-in-out infinite;
  }

  .blog-item-skeleton-text {
    height: 9rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;

    .title-skeleton-wrapper {
      margin-bottom: 1.75rem;

      .main-skeleton-title,
      .sub-skeleton-title,
      .etc-skeleton-wrapper,
      .writer-informaiton-skeleton,
      .word-like-skeleton {
        background-color: #f0f0f0;
        background: linear-gradient(
          50deg,
          #f0f0f0 25%,
          #e0e0e0 50%,
          #f0f0f0 75%
        );
        background-size: 200% 100%;
        animation: gradient-shift 1.5s ease-in-out infinite;
      }

      .main-skeleton-title {
        margin-bottom: 1.5rem;
        height: 0.8rem;
        width: 40%;
        border-radius: 10px;
      }

      .sub-skeleton-title-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .sub-skeleton-title {
          height: 0.75rem;
          width: 100%;
          border-radius: 10px;
        }
      }
    }

    .etc-skeleton-wrapper {
      height: 0.75rem;
      width: 40%;
      border-radius: 10px;
    }
  }
  .blog-item-skeleton-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-top: 1px solid #f1f3f5;
    height: 1rem;
    .writer-informaiton-skeleton {
      height: 0.75rem;
      width: 40%;
      border-radius: 10px;
      background-color: #f0f0f0;
      background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
      );
      background-size: 200% 100%;
      animation: gradient-shift 1.5s ease-in-out infinite;
    }
    .word-like-skeleton {
      height: 0.75rem;
      width: 20%;
      border-radius: 10px;
      background-color: #f0f0f0;
      background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
      );
      background-size: 200% 100%;
      animation: gradient-shift 1.5s ease-in-out infinite;
    }
  }
}
</style>
