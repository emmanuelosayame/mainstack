import {
  ArrowLeftDown,
  ChevronDown,
  ExportListSvg,
  InfoSvg,
} from '../components/Svg';

const data = [
  {
    id: '1',
    title: 'Psychology of Money ',
    name: 'Roy Cash',
    price: 'USD 600',
    date: 'Apr 03,2022',
  },
];

const Revenue = () => {
  return (
    <div className='px-36 py-20'>
      <section className='flex w-full'>
        <section className='w-3/5'>
          <div className='flex items-center gap-4'>
            <div className='flex flex-col gap-3'>
              <p className='text-sm text-[#56616B]'>Available Balance</p>
              <h4 className='font-bold text-[36px]'>USD 120,500.00</h4>
            </div>

            <button className='bg-black rounded-[100px] h-fit px-10 py-4 text-white font-semibold'>
              Withdraw
            </button>
          </div>
        </section>

        <section className='w-2/5 space-y-4'>
          <div className='w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-sm'>Ledger Balance</p>
              <button>
                <InfoSvg />
              </button>
            </div>
            <h5 className='text-[28px] font-bold'>USD 0.00</h5>
          </div>

          <div className='w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-sm'>Total Payout</p>
              <button>
                <InfoSvg />
              </button>
            </div>
            <h5 className='text-[28px] font-bold'>USD 55,080.00</h5>
          </div>

          <div className='w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-sm'>Total Revenue</p>
              <button>
                <InfoSvg />
              </button>
            </div>
            <h5 className='text-[28px] font-bold'>USD 175,580.00</h5>
          </div>

          <div className='w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-sm'>Pending Payout</p>
              <button>
                <InfoSvg />
              </button>
            </div>
            <h5 className='text-[28px] font-bold'>USD 0.00</h5>
          </div>
        </section>
      </section>

      <section className='mt-10'>
        <div className='flex gap-3 border-b border-b-neutral-200 py-5'>
          <div className='flex-1 leading-6'>
            <h4 className='text-[24px] font-bold'>24 Transactions</h4>
            <p className='text-sm text-[#56616B]'>
              Your transactions for the last 7 days
            </p>
          </div>

          <button className='h-fit flex items-center py-3 px-5 bg-maingray rounded-[100px] font-semibold gap-1'>
            <p>Filter</p>
            <ChevronDown />
          </button>

          <button className='h-fit flex items-center py-3 px-5 bg-maingray rounded-[100px] font-semibold gap-1'>
            <p>Export list</p>
            <ExportListSvg />
          </button>
        </div>

        <div className='mt-10'>
          {data.map((x) => (
            <div key={x.id} className='flex gap-4'>
              <div className='rounded-full w-[48px] h-[48px] bg-[#E3FCF2] flex justify-center items-center'>
                <ArrowLeftDown />
              </div>
              <div className='flex-1'>
                <p>{x.title}</p>
                <p className='text-sm text-secGray'>{x.name}</p>
              </div>
              <div>
                <p className='font-bold'>{x.price}</p>
                <p className='text-sm text-secGray'>{x.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Revenue;
