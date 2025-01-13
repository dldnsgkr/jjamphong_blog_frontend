<script setup lang="ts">
type InputPropsType = {
  type?: 'text' | 'password' | 'number' | 'email';
  inputStyle?: 'basic-input' | 'login-input';
  placeholder?: string;
};
const {
  type = 'text',
  inputStyle = 'basic-input',
  placeholder,
} = defineProps<InputPropsType>();
</script>

<template>
  <input
    :type="type"
    :class="inputStyle"
    :placeholder="placeholder"
  />
</template>

<style scoped lang="scss">
.basic-input {
}
.login-input {
  padding: 1rem;
  border: 1px solid #dee2e6;
  &:focus {
    outline: none;
    border-color: #12b886;
  }
}
</style>
