
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

function Tabs({ tabs, setSelected, children }) {
    return (
        <div className='w-full px-1 sm:px-0'>
            <TabGroup>
                <TabList className='flex space-x-6 rounded-xl p-1'>
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index + tab.title}
                            onClick={() => setSelected(index)}
                            className="w-fit flex items-center outline-none gap-2 px-3 py-2.5 text-base font-medium leading-5 bg-white focus:outline-none data-[selected]:text-blue-700 data-[selected]:border-b-2 data-[selected]:border-blue-600 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                        >
                            {tab.icon}
                            <span>{tab.title}</span>
                        </Tab>
                    ))}
                </TabList>
                <TabPanels className='w-full mt-2'>{children}</TabPanels>
            </TabGroup>
        </div>
    )
}

export default Tabs
