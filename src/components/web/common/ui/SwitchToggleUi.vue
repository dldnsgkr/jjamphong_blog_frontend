<script setup lang="ts"></script>

<template>
  <section class="model-2">
    <div class="checkbox">
      <input type="checkbox" />
      <label></label>
    </div>
  </section>
</template>

<style scoped lang="scss">
.checkbox {
  position: relative;
  display: inline-block;

  &:after,
  &:before {
    font-family: FontAwesome;
    font-feature-settings: normal;
    font-kerning: auto;
    font-language-override: normal;
    font-stretch: normal;
    font-style: normal;
    font-synthesis: weight style;
    font-variant: normal;
    font-weight: normal;
    text-rendering: auto;
  }
  label {
    width: 90px;
    height: 42px;
    background: #ccc;
    position: relative;
    display: inline-block;
    border-radius: 46px;
    transition: all 0.4s;
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      left: 0;
      top: -5px;
      z-index: 2;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
    }
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 0;
    cursor: pointer;
    &:hover + label:after {
      box-shadow:
        0 2px 15px rgba(0, 0, 0, 0.2),
        0 3px 8px rgba(0, 0, 0, 0.15);
    }
    &:checked + label {
      &:after {
        left: 40px;
      }
    }
  }
}

.model-2 {
  .checkbox {
    label {
      height: 30px;
      width: 75px;
      &:after {
        top: 0;
        width: 30px;
        height: 30px;
      }
    }
    input:checked + label {
      background: #4bd865;
      &:after {
        left: 45px;
      }
    }
  }
}
</style>
