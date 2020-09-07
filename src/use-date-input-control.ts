import { useRef, useEffect } from 'react';
import { createDateInputControl } from 'date-input-control';

const isNonNull = <T>(x: T): x is NonNullable<T> => x != null;

export const useDateInputControl = () => {
  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);
  const ref7 = useRef<HTMLInputElement>(null);
  const ref8 = useRef<HTMLInputElement>(null);
  const ref9 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el0 = ref0.current;
    const el1 = ref1.current;
    const el2 = ref2.current;
    const el3 = ref3.current;
    const el4 = ref4.current;
    const el5 = ref5.current;
    const el6 = ref6.current;
    const el7 = ref7.current;
    const el8 = ref8.current;
    const el9 = ref9.current;
    const inputs = [el0, el1, el2, el3, el4, el5, el6, el7, el8, el9].filter(isNonNull);
    return createDateInputControl(inputs);
  }, []);

  return [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9];
};
