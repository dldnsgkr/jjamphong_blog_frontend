import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const notify = () => {
  toast('Default Notification !');

  toast.success('Success Notification !', {
    position: toast.POSITION.TOP_CENTER,
  });

  toast.error('Error Notification !', {
    position: toast.POSITION.TOP_LEFT,
  });

  toast.warn('Warning Notification !', {
    position: toast.POSITION.BOTTOM_LEFT,
  });

  toast.info('Info Notification !', {
    position: toast.POSITION.BOTTOM_CENTER,
  });

  toast('Custom Style Notification with css class!', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export default toast;
