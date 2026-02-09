<script setup lang="ts">
import type { Component } from 'vue';

type PopupType =
  | 'modal'
  | 'alert'
  | 'dialog'
  | 'bottomsheet';

type PopupProps = {
  modelValue: boolean;
  type: PopupType;

  // 공통
  title?: string;
  message?: string;

  // 버튼
  confirmText?: string;
  cancelText?: string;

  // 동작
  closeOnDim?: boolean;

  // 커스텀 (선택)
  contentComponent?: Component;
  contentProps?: Record<string, any>;
};

const props = defineProps<PopupProps>();
const emit = defineEmits([
  'update:modelValue',
  'confirm',
  'cancel',
]);

const close = () => emit('update:modelValue', false);

const onConfirm = () => {
  emit('confirm');
  close();
};

const onCancel = () => {
  emit('cancel');
  close();
};

const onDimClick = () => {
  if (props.closeOnDim !== false) close();
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="popup-background"
      :class="[`type-${type}`]"
      @click="onDimClick"
    >
      <div class="popup-wrapper" @click.stop>
        <header
          v-if="type === 'dialog' || type === 'bottomsheet'"
          class="popup-header"
        >
          <h2 class="popup-title">{{ title }}</h2>
          <button class="close" @click="onCancel">✕</button>
        </header>

        <div class="popup-content">
          <p v-if="!contentComponent && message">
            {{ message }}
          </p>

          <component
            v-else-if="contentComponent"
            :is="contentComponent"
            v-bind="contentProps"
          />
        </div>

        <div
          v-if="type !== 'bottomsheet'"
          class="popup-actions"
        >
          <button v-if="cancelText" @click="onCancel">
            {{ cancelText }}
          </button>
          <button @click="onConfirm">
            {{ confirmText || '확인' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
/* =========================
   Popup Background
========================= */
.popup-background {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  /* =========================
     Common Wrapper
  ========================= */
  .popup-wrapper {
    background: #fff;
    border-radius: 12px;
    min-width: 320px;
    max-width: 90vw;
    max-height: 90vh;
    overflow: hidden;
    box-sizing: border-box;
  }

  .popup-title {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .popup-content {
    padding: 20px;
    font-size: 1.4rem;
    line-height: 1.6;
  }

  .popup-actions {
    display: flex;
    gap: 8px;
    padding: 16px 20px;
  }

  /* =========================
     ALERT / CONFIRM / MODAL
  ========================= */
  &.type-alert,
  &.type-confirm,
  &.type-modal {
    .popup-wrapper {
      padding: 24px;
      text-align: center;
    }

    .popup-actions {
      justify-content: center;
      padding-top: 24px;
    }
  }

  /* =========================
     DIALOG
  ========================= */
  &.type-dialog {
    .popup-wrapper {
      width: 480px;
      padding: 0;
    }

    .popup-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid #eee;

      .close {
        background: none;
        border: none;
        font-size: 1.8rem;
        cursor: pointer;
      }
    }

    .popup-content {
      padding: 20px;
    }

    .popup-actions {
      justify-content: flex-end;
      border-top: 1px solid #eee;
    }
  }

  /* =========================
     BOTTOM SHEET
  ========================= */
  &.type-bottomsheet {
    align-items: flex-end;

    .popup-wrapper {
      width: 100%;
      max-width: 480px;
      border-radius: 16px 16px 0 0;
      padding: 0;
      animation: sheet-up 0.25s ease forwards;
    }

    .popup-header {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 16px;
      border-bottom: 1px solid #eee;
    }
  }
}

/* =========================
   Bottom Sheet Animation
========================= */
@keyframes sheet-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

/* =========================
   Mobile Only (BottomSheet)
========================= */
@media (max-width: 768px) {
  .popup-background.type-bottomsheet {
    .popup-header {
      &::before {
        content: '';
        position: absolute;
        top: 8px;
        width: 40px;
        height: 4px;
        background: #ccc;
        border-radius: 2px;
      }
    }
  }
}
</style>
