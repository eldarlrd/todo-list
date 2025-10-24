import toast from 'react-hot-toast';

const errorToast = (message: string): string => toast.error(message);
const successToast = (message: string): string => toast.success(message);

export { errorToast, successToast };
