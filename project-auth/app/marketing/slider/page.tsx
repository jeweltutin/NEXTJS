'use client'
import { useEffect, useState } from "react";
import Table from "rc-table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, type RootState } from '@/redux/store';
import { getSliderData } from '@/redux/slices/sliderSlice';
import Loader from "@/components/loader";
import TablePagination from "@/components/backend/table/pagination";
import { format } from "date-fns";


// react icons import
import { RiArrowGoBackLine } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { CgAdd } from 'react-icons/cg';
import { FiEdit } from 'react-icons/fi';



const Slider = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const sliderData = useSelector((state: RootState) => state.sliderReducer.getSliderData);

  useEffect(() => {
    dispatch(getSliderData());
  }, [dispatch])
  console.log(sliderData);

  const columns = [
    {
      title: 'Heading One',
      dataIndex: 'headingOne',
      className: '',
      key: 'headingOne',
      align: 'left',
    },
    {
      title: 'Heading Two',
      dataIndex: 'headingTwo',
      className: '',
      key: 'headingTwo',
      align: 'left',
    },

    {
      title: 'Paragraph',
      dataIndex: 'paragraph',
      className: '',
      key: 'paragraph',
      align: 'left',
      render: (paragraph: any) => <p>{paragraph?.slice(0, 40)}...</p>,
    },
    {
      title: 'Last Updated',
      dataIndex: 'updatedAt',
      className: '',
      key: 'updatedAt',
      align: 'left',
      render: (updatedAt: any, { updatedBy }: any) => (
        <div>
          <p> {format(new Date(updatedAt), 'Pp')}</p>
          {/* <p className='text-[12px]'> by {updatedBy.name}</p> */}
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: '_id',
      className: '',
      key: '_id',
      align: 'left',
      render: (_id: any, data: any) => (
        <div className='justify_start space-x-2'>
          <FiEdit className='text-blue-500 h-6 w-6 cursor-pointer'
            onClick={() => {
              setShowEditForm(!showEditForm);
              // setLanding(data);
            }}
          />
        </div>
      ),
    },
  ];

  const { data, status } = sliderData;
  const allData = data;


  // Table - Pagination config
  const [perPage, setPerPage] = useState(4);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const getData = (current: any, pageSize: any) => {
    if (allData?.length > 0) {
      return allData.slice((current - 1) * pageSize, current * pageSize);
    } else return [];
  };

  return (
    <div className='w-full h-full relative'>
      <div>
        <div className='dashboard_title font-semibold'>
          {showCreateForm ? 'Create New' : ''}
          {showEditForm ? 'Edit selected content' : ''}
          {showSettings ? 'Edit section settings' : ''}
          {!showCreateForm && !showEditForm && !showSettings ? 'Home Slider' : ''}
        </div>
      </div>

      {showCreateForm || showEditForm || showSettings ? (
        <button className='dashboard_btn my-4 flex_center space-x-2'
          onClick={() => {
            setShowCreateForm(false);
            setShowEditForm(false);
            setShowSettings(false);
          }} >
          <RiArrowGoBackLine /> <span> back </span>
        </button>
      ) : (
        <button className='flex_center space-x-2 dashboard_btn my-4'
          onClick={() => setShowCreateForm(true)} >
          <CgAdd className='text-white' /> <p>Create New</p>
        </button>
      )}
      <div className='absolute right-0 top-0'>
        {!showCreateForm && !showEditForm && !showSettings ? (
          <button
            onClick={() => setShowSettings(true)}
            className='flex_center space-x-2 dashboard_btn'
          >
            <MdSettings className='text-white' /> <p>settings</p>
          </button>
        ) : null}
      </div>


      {!showCreateForm && !showEditForm && !showSettings ? (
        <div>
          <Loader status={status}>
            <div className='w-full h-full grid grid-cols-1'>

              <Table
                //@ts-ignore
                columns={columns}
                className='w-full text-[14px] font-normal text-black landing_table'
                rowClassName={({ isActive }) =>
                  isActive ? 'p-2 border-b-[1px] border-brand_color' : 'p-2 border-b-[1px] border-brand_color bg-red-100'
                }
                emptyText={'Empty table data'}
                data={getData(current, size)}
                //data={allData}
                rowKey='_id'
                scroll={{ x: true }}
              />

              <TablePagination
                current={current}
                size={size}
                setSize={setSize}
                setCurrent={setCurrent}
                data={allData}
              />
            </div>
          </Loader>
        </div>
      ) : null}
      <div className='my-4'>
        {/* {showEditForm ? (
                    <EditLanding
                        setEditedData={setEditedData}
                        setShowEditModal={setShowEditModal}
                        selectedLanding={selectedLanding}
                    />
                ) : null} */}
      </div>
    </div>
  )
}

export default Slider
