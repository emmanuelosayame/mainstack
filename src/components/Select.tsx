import { Icon, Root, Trigger, Value } from '@radix-ui/react-select';
import { ChevronDownSm } from './Svg';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  label: string;
}

const Select = ({ value, onValueChange, label }: Props) => {
  return (
    <Root value={value} onValueChange={onValueChange}>
      <div>
        <h4 className='font-bold'>{label}</h4>
        <Trigger
          className='w-full bg-lightGray rounded-[12px] py-2.5
       px-4 flex justify-between border-[3px] border-transparent mt-2'>
          <Value placeholder='Select Transaction Type' />
          <Icon>
            <ChevronDownSm />
          </Icon>
        </Trigger>
      </div>
    </Root>
  );
};

export default Select;
