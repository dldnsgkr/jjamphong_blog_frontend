<script setup lang="ts">
type InputPropsType = {
  type?: 'text' | 'password' | 'number' | 'email';
  inputStyle?: 'basic-input' | 'login-input';
  placeholder?: string;
  modelValue?: any;
  autocomplete?:
    | 'username'
    | 'current-password'
    | 'new-password';
};

const {
  type = 'text',
  inputStyle = 'basic-input',
  placeholder,
  modelValue,
  autocomplete,
} = defineProps<InputPropsType>();
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit('update:modelValue', input.value);
};
</script>

<template>
  <input
    :value="modelValue"
    @input="handleInput"
    :type="type"
    :class="inputStyle"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
  />
</template>

<style scoped lang="scss">
.basic-input {
  padding: 0.25rem;
  font-size: 1rem;
  border: 1px solid #dee2e6;
  &:focus {
    outline: none;
    border-color: black;
  }
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
