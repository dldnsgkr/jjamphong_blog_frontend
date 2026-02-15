import type { ResponseType } from 'types/common/httpsClients.types';
import { h } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

type NotifyType = {
  message: string;
  type:
    | 'default'
    | 'success'
    | 'info'
    | 'error'
    | 'loading'
    | 'warning';
  theme: 'auto' | 'light' | 'dark' | 'colored';
  position:
    | 'bottom-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'top-left'
    | 'top-right';
  transition: 'bounce' | 'flip' | 'zoom' | 'slide';
  pauseOnHover: boolean;
  rtl: boolean;
};

export const basicToast = ({
  type,
  theme,
  message,
  position,
  transition,
  pauseOnHover = false,
  rtl = false,
}: NotifyType) => {
  toast(message, {
    type,
    position,
    pauseOnHover,
    transition,
    theme,
    rtl,
  });
};

let isActive = false;

export const promiseToast = async <T>({
  promise,
}: {
  promise: Promise<ResponseType<T>>;
}) => {
  if (isActive) return;

  isActive = true;

  await toast.promise(promise, {
    pending: {
      render() {
        return 'Promise is pending';
      },
    },
    success: {
      render(res) {
        return 'Hello ' + res.data.contents;
      },
      closeButton: true,
      transition: 'zoom',
    },
    error: {
      render(err) {
        return h('div', 'Err: ' + err.data.message);
      },
    },
  });

  isActive = false;
};

export const removeToast = (customId: string) =>
  toast.remove(customId);

/**
 *  basic success 전용 모달
 */
export const successToast = ({
  message,
}: {
  message: string;
}) =>
  toast.success(message, {
    autoClose: 5000,
  });

/**
 *  basic error 전용 모달
 */
export const errorToast = ({
  message,
}: {
  message: string;
}) =>
  toast.error(message, {
    autoClose: 5000,
  });

/**
   * promise(api 호출 관련 테스트 로직)
   * promiseToast({
    promise: new Promise<ResponseType<unknown>>(
      (resolve) => {
        setTimeout(async () => {
          const result = await getRequest('users/12');
          resolve(result);
        }, 3000);
      }
    ),
  });
   */
