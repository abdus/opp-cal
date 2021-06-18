import { useToasts } from 'react-toast-notifications';
import { supabase } from '../utils/supabase';

type PgError = {
  code: string;
  hint: string;
  details: string;
  message: string;
};

export function useInsertIntoDB<T>() {
  type ResponseType = {
    error: PgError | null;
    data: T[] | null;
  };

  const toast = useToasts();

  return (table_name: string, data: any): PromiseLike<ResponseType> => supabase
    .from<T>(table_name)
    .insert(data)
    .then(
      (resp): ResponseType => {
        if (resp.error) {
          toast.addToast(resp.error.message, { appearance: 'error' });
        }

        if (resp.data) {
          toast.addToast('Successfully Added Opportunity', {
            appearance: 'success',
          });
        }

        return resp;
      },
    );
}
