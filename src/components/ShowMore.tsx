'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set('limit', `${newLimit}`);

    // Set the specified search parameter to the given value
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          btnType="button"
          title="Show More"
          styles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
