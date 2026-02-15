<script setup lang="ts">
import type { PopupProps } from 'types/common/popup.types';
import { computed } from 'vue';

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
    <Transition name="popup">
      <div
        v-if="modelValue"
        class="popup-background"
        :class="[`type-${type}`]"
        @click="onDimClick"
      >
        <div class="popup-wrapper" @click.stop>
          <header
            v-if="
              type === 'dialog' || type === 'bottomsheet'
            "
            class="popup-header"
          >
            <h2 class="popup-title">{{ title }}</h2>
            <button class="close" @click="onCancel">
              ✕
            </button>
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
    </Transition>
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

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.25s ease;
}

.popup-wrapper {
  transform: scale(0.96);
  transition: transform 0.25s ease;
}

.popup-enter-from .popup-wrapper,
.popup-leave-to .popup-wrapper {
  transform: scale(0.96);
}

.popup-enter-to .popup-wrapper,
.popup-leave-from .popup-wrapper {
  transform: scale(1);
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
