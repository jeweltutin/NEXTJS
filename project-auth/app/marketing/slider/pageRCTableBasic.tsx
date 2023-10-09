'use client'
import { useEffect, useState } from "react";
import Table from "rc-table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, type RootState } from '@/redux/store';
import { getSliderData } from '@/redux/slices/sliderSlice';


// react icons import
import { RiArrowGoBackLine } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { CgAdd } from 'react-icons/cg';


const Slider = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const sliderData = useSelector((state: RootState) => state.sliderReducer.getSliderData);

  useEffect(() => {
    dispatch(getSliderData());
  }, [])
  console.log(sliderData);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      render: () => <a href="#">Delete</a>,
    },
  ];
  
  const data = [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
  ];

  return (
    <div className='w-full h-full relative'>

      <Table columns={columns} data={data} />

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

    </div>
  )
}

export default Slider
