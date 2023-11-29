import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Transaction } from '../../utils/models';
import { toDateLong } from '../../utils/helper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  transactions: Transaction[];
}

const Chart = ({ transactions: unfilteredTransactions }: Props) => {
  const transactions = unfilteredTransactions.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  const labels = transactions.map(
    (x) => x.date || x?.payment_reference || x.metadata?.name
  );

  const data: ChartData<'line', number[], string> = {
    labels,
    datasets: [
      {
        data: transactions.map((x) => x.amount || 0),
        borderColor: '#FF5403',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.8,
        borderWidth: 1,
        label: 'x',
      },
    ],
  };

  return (
    <div>
      <div className='w-full h-[220px] mt-10'>
        <Line
          width={'100%'}
          options={{
            maintainAspectRatio: false,
            elements: { point: { radius: 0 } },
            plugins: { legend: { display: false } },
            responsive: true,
            scales: {
              x: {
                display: false,
                border: {
                  display: true,
                },
                grid: {
                  display: false,
                  drawOnChartArea: true,
                  drawTicks: false,
                },
              },
              y: {
                display: false,
                border: {
                  display: true,
                },
                grid: {
                  display: false,
                  drawOnChartArea: true,
                  drawTicks: false,
                },
              },
            },
          }}
          data={data}
        />
      </div>
      <div className='flex w-full items-center my-3'>
        <div className='w-2 h-2 rounded-full bg-borderGray' />
        <div className='w-full h-[2px] bg-borderGray' />
        <div className='w-2 h-2 rounded-full bg-borderGray' />
      </div>
      <div className='flex w-full justify-between text-sm text-[#56616B]'>
        <p>{toDateLong(transactions?.[0]?.date)}</p>
        <p>{toDateLong(transactions?.[transactions.length - 1]?.date)}</p>
      </div>
    </div>
  );
};

export default Chart;
