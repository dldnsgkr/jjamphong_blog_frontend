import type { Component } from 'vue';

/** popup의 종류(type) */
type PopupType =
  | 'modal'
  | 'alert'
  | 'dialog'
  | 'bottomsheet';

export type PopupProps = {
  /** popup 활성화 여부 */
  modelValue: boolean;

  /** popup 종류 */
  type: PopupType;

  /** popup 제목 혹은 주요 텍스트 */
  title?: string;

  /** popup 부제목 혹은 설명 텍스트 */
  message?: string;

  /** popup 확인 */
  confirmText?: string;

  /** popup 취소 */
  cancelText?: string;

  /** popup 닫기 */
  closeOnDim?: boolean;

  /** content(ui 용) component */
  contentComponent?: Component;
  contentProps?: Record<string, any>;
};

export type PopupFunc = {
  onConfirm?: () => void;
  onCancel?: () => void;
};
