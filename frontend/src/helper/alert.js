import { toast } from 'react-toastify';

const Alert = {
  success: (message) => {
    toast.success(message, {
        position: "top-center" // Set position to top center
    });
  },
  error: (message) => {
    toast.error(message, {
        position: "top-center" // Set position to top center
    });
  },
  info: (message) => {
    toast.info(message, {
        position: "top-center" // Set position to top center
    });
  },
  warning: (message) => {
    toast.warning(message, {
        position: "top-center" // Set position to top center
    });
  }
};

export default Alert;
