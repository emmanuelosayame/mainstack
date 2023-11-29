import {
  Content,
  Overlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import { ChevronDown, XIcon } from './svg';
import { useState } from 'react';
import { DatePicker } from './DatePicker';
import Select from './Select';

interface Filter {
  dateRange: { start?: Date; end?: Date };
  transactionType: string[];
  transactionStatus: string[];
}

const defaultState = {
  dateRange: {},
  transactionStatus: [],
  transactionType: [],
};

const Filter = () => {
  const [open, setOpen] = useState(false);

  const [filter, setFilter] = useState<Filter>(defaultState);

  const { dateRange, transactionStatus, transactionType } = filter;

  const applyDisabled = JSON.stringify(defaultState) === JSON.stringify(filter);

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger className='h-fit flex items-center py-3 px-5 bg-maingray rounded-[100px] font-semibold gap-1'>
        <p>Filter</p>
        <ChevronDown />
      </Trigger>

      <Overlay className='bg-black/40 z-20 inset-0 fixed' />
      <Portal>
        <Content
          className='fixed z-30 rounded-[20px] overflow-hidden inset-y-3 right-3
           bg-white backdrop-blur-lg drop-shadow-lg transition-all w-11/12 md:w-[460px] px-5 py-6 outline-none flex flex-col'>
          <div className='space-y-6 flex-1'>
            <div className='flex justify-between'>
              <h3 className='text-[24px] font-bold'>Filter</h3>
              <button className='' onClick={() => setOpen(false)}>
                <XIcon />
              </button>
            </div>

            <div className='flex gap-2 mt-4'>
              <button className='rounded-[100px] border border-border-gray px-3.5 text-sm py-2.5 text-black'>
                Today
              </button>

              <button className='rounded-[100px] border border-border-gray px-3.5 text-sm py-2.5'>
                Last 7 days
              </button>

              <button className='rounded-[100px] border border-border-gray px-3.5 text-sm py-2.5'>
                This month
              </button>

              <button className='rounded-[100px] border border-border-gray px-3.5 text-sm py-2.5'>
                Last 3 months
              </button>
            </div>

            <div>
              <h4 className='font-bold'>Date Range</h4>
              <div className='relative flex justify-between gap-4'>
                <DatePicker
                  value={dateRange.start}
                  onChange={(date) => {
                    setFilter((prev) => ({
                      ...prev,
                      dateRange: { start: date, end: prev.dateRange.end },
                    }));
                  }}
                />
                <DatePicker
                  value={dateRange.end}
                  onChange={(date) => {
                    setFilter((prev) => ({
                      ...prev,
                      dateRange: { start: prev.dateRange.start, end: date },
                    }));
                  }}
                />
              </div>
            </div>

            <Select
              value={
                transactionType.length > 0
                  ? transactionType.join(' , ')
                  : 'Select Transaction Type'
              }
              onChecked={(id, state) => {
                setFilter((prev) => ({
                  ...prev,
                  transactionType: state
                    ? [...prev.transactionType, id]
                    : prev.transactionType.filter((x) => x !== id),
                }));
              }}
              label='Transaction Type'
              options={[
                'Store Transactions',
                'Get Tipped',
                'Withdrawals',
                'Chargebacks',
                'Cashbacks',
                'Refer & Earn',
              ]}
              checked={transactionType}
            />

            <Select
              value={
                transactionStatus.length > 0
                  ? transactionStatus.join(' , ')
                  : 'Select Transaction Status'
              }
              onChecked={(id, state) => {
                setFilter((prev) => ({
                  ...prev,
                  transactionStatus: state
                    ? [...prev.transactionStatus, id]
                    : prev.transactionStatus.filter((x) => x !== id),
                }));
              }}
              label='Transaction Status'
              options={['Successful', 'Pending', 'Failed']}
              checked={transactionStatus}
            />
          </div>

          <div className='flex gap-3'>
            <button
              className='border rounded-[100px] border-borderGray w-full py-3 font-bold'
              onClick={() => setFilter(defaultState)}>
              Clear
            </button>
            <button
              disabled={applyDisabled}
              className='rounded-[100px] bg-black text-white w-full py-3 font-bold disabled:opacity-20'>
              Apply
            </button>
          </div>
        </Content>
      </Portal>
    </Root>
  );
};

export default Filter;
