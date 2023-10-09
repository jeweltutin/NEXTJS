'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, type RootState } from '@/redux/store';
import { getSliderData } from '@/redux/slices/sliderSlice';


// react icons import
import { RiArrowGoBackLine } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { CgAdd } from 'react-icons/cg';

const Slider = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const sliderData = useSelector((state: RootState) => state.sliderReducer.getSliderData);

  useEffect(() => {
    dispatch(getSliderData());
  }, [])
  console.log(sliderData);


  return (
    <div className='w-full h-full relative'>
      <table>
        <tr>
          <th>Id</th>
          <th>Heading</th>
          <th>Sub Heading</th>
          <th>Image</th>
        </tr>
        {sliderData.data.map((mvar:any, index: number) => (
          <tr className="border-solid border-2 border-indigo-600">
            <td>{index+1}</td>
            <td className="border-solid border-2 border-indigo-600">{mvar.headingOne}</td>
            <td className="border-solid border-2 border-indigo-600">{mvar.headingTwo}</td>
            <td className="border-solid border-2 border-indigo-600">{mvar.image}</td>
          </tr>
        ))}
      </table>
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
