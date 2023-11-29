import { Bars } from 'react-loader-spinner';

export const Loading = ({
  position = 'fixed',
}: {
  position?: 'fixed' | 'absolute';
}) => {
  return (
    <div
      className={`flex justify-center items-center ${
        position === 'fixed'
          ? 'fixed w-screen bg-white h-screen'
          : 'absolute w-full bg-black/10'
      } inset-0 z-50`}>
      <Bars width={'30'} color='gray' />
    </div>
  );
};
