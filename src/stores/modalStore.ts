import { markRaw } from 'vue';
import { ref, type Component } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  /**
   * modal 창 여닫는 state
   */
  const modalState = ref<boolean>(false);

  /**
   * 보여지게 될 UI state
   */
  const modalView = ref<Component | undefined>();

  /**
   * modal state control하는 action
   */
  function handleModalState() {
    modalState.value = !modalState.value;
  }

  /**
   * modal state control하는 action
   */
  function handleModalView(component?: Component) {
    if (component !== undefined) {
      modalView.value = markRaw(component);
    }
  }

  function openModal(component: Component) {
    handleModalView(component);
    handleModalState();
  }

  return {
    modalState,
    handleModalState,
    modalView,
    handleModalView,
    openModal,
  };
});
