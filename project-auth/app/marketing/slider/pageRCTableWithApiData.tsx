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
  }, [dispatch])
  console.log(sliderData);

  const columns = [
    {
      title: 'First Heading',
      dataIndex: 'headingOne',
      key: 'name',
      width: 250,
    },
    {
      title: 'Sub Heading',
      dataIndex: 'headingTwo',
      key: 'age',
      width: 250,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'address',
      width: 350,
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      render: () => <a href="#">Delete</a>,
    },
  ];

  const { data, status } = sliderData;
  const alldata = data;
  
 /*   const data = [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
  ];  */

  return (
    <div className='w-full h-full relative'>

      <Table columns={columns} data={data} className='w-full text-[14px] pt-8 font-normal text-black landing_table border-y-8'/>

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
