import { Content, Root, Trigger } from '@radix-ui/react-dialog';
import { format } from 'date-fns';
import { forwardRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { ChevronDownSm, ChevronUpSvg } from './svg';

interface Props {
  value?: Date;
  onChange: (date: Date) => void;
}

export const DatePicker = forwardRef<HTMLButtonElement, Props>(
  ({ value, onChange }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <Root open={open} onOpenChange={setOpen}>
        <Trigger
          ref={ref}
          className='date-picker-trigger w-full bg-lightGray rounded-[12px] py-2.5 px-4 flex justify-between border-[3px] border-transparent'>
          <span>{value ? format(value, 'dd MMMM yyyy') : 'Select Date'}</span>
          {open ? <ChevronUpSvg /> : <ChevronDownSm />}
        </Trigger>
        <Content className='form-datepicker absolute z-40 top-16 inset-x-0 rounded-[16px] shadow-md w-full bg-white'>
          <DayPicker
            className='w-full'
            mode='single'
            selected={value}
            onSelect={(value) => (value ? onChange(value) : {})}
            //   fromDate={new Date()}
            footer={<></>}
          />
        </Content>
      </Root>
    );
  }
);
