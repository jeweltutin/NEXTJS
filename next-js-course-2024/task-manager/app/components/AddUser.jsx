import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { MdCheck } from "react-icons/md";
import clsx from 'clsx';
import { useState } from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

const people = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
];

export default function AddUser() {
  // Initialize the selected state with the first person
  const [selected, setSelected] = useState([people[0]]);

  const handleChange = (selectedItems) => {
    setSelected(selectedItems);
  };

  return (
    <div className="mx-auto h-screen w-52 pt-20">
      <Listbox value={selected} onChange={handleChange} multiple>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-black py-1.5 pr-8 pl-3 text-left text-sm text-white',
            'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25'
          )}
        >
          {selected.length > 0
            ? selected.map((item) => item.name).join(', ')
            : 'Select users'}
          <IoChevronDownCircleOutline
            className="absolute top-2.5 right-2.5 h-5 w-5 text-white/60 pointer-events-none"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          className={clsx(
            'mt-1 max-h-60 w-full overflow-auto rounded-lg bg-black border border-white/10 py-1 shadow-lg focus:outline-none'
          )}
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className={({ active, selected }) =>
                clsx(
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                  active ? 'bg-gray-800 text-white' : 'text-gray-300',
                  selected && 'font-medium'
                )
              }
            >

                <>
                  <span
                    className={clsx(
                      'block truncate',
                      selected ? 'font-semibold' : 'font-normal'
                    )}
                  >
                    {person.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <MdCheck className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  ) : null}
                </>

            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
