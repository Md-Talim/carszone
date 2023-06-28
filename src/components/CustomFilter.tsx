'use client';

import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

interface Option {
  title: string;
  value: string;
}

interface Props {
  title: string;
  options: Option[];
}

const CustomFilter = ({ title, options }: Props) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="up down"
              className="ml-4 object-contain"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative px-4 py-2 cursor-default select-none ${
                      active
                        ? 'bg-primary-blue text-primary-blue-100'
                        : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-bold' : 'font-normal'
                      }`}
                    >
                      {option.value}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
