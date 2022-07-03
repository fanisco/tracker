import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { isQueryError, isNestError } from '../helpers';

const useError = (error: unknown) =>
  useEffect(() => {
    if (error) {
      let message;

      if (isQueryError(error)) {
        message =
          error.originalStatus === 500 ? 'Internal server error.' : error.error;
      } else if (isNestError(error)) {
        message = `Error: ${error.data.message}`;
      }

      toast(message);
    }
  }, [error]);

export default useError;
