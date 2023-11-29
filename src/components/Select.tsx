import { Content, Root, Trigger } from '@radix-ui/react-dialog';
import { ChevronDownSm, ChevronUpSvg } from './Svg';
import Checkbox from './Checkbox';
import { useState } from 'react';

interface Props {
  value: string;
  onChecked: (id: string, state: boolean) => void;
  label: string;
  options: string[];
  checked: string[];
}

const Select = ({ value, options, onChecked, label, checked }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <div className='relative'>
        <h4 className='font-bold'>{label}</h4>
        <Trigger
          className={` w-full bg-lightGray rounded-[12px] py-2.5
       px-4 flex justify-between border-[3px]  mt-2 ${
         open ? 'border-black' : 'border-transparent'
       }`}>
          <span>{value}</span>
          <span>{open ? <ChevronUpSvg /> : <ChevronDownSm />}</span>
        </Trigger>

        <Content className='custom-shadow bg-white absolute top-[93px] rounded-[12px] inset-x-0 z-40 p-5 flex flex-col gap-4'>
          {options.map((option) => (
            <div className='flex gap-4'>
              <Checkbox
                checked={checked.includes(option)}
                onChecked={(e) => onChecked(option, e)}
              />
              <span className='font-semibold'>{option}</span>
            </div>
          ))}
        </Content>
      </div>
    </Root>
  );
};

export default Select;
