import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Car } from './CarCard';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}

const CarDetails = ({ isOpen, closeModal, car }: Props) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* The background backdrop. */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center text-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      className="object-contain"
                      alt="close icon"
                    />
                  </button>

                  {/* Car Images */}
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src="/hero.png"
                        fill
                        priority
                        alt="car"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          alt="car"
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          alt="car"
                          className="object-contain"
                        />
                      </div>
                      <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          alt="car"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex gap-5 justify-between w-full"
                        >
                          <h4 className="text-grey capitalize">
                            {/* Replace _ with a " " space */}
                            {key.split('_').join(' ')}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
