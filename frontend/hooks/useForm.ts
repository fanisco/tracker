import { FormEvent } from 'react';

const useForm = <T extends Record<string, string>>(fields: string[]) => {
  return (callback: Function) => (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const elements = form.elements as unknown as Record<
      string,
      HTMLFormElement
    >;

    return callback(
      fields.reduce<T>(
        (acc, field) => ({
          ...acc,
          [field]: elements[field].value,
        }),
        {} as T,
      ),
    );
  };
};

export default useForm;
