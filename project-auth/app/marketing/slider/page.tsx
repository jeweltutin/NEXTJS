'use client'
import { useEffect, useState } from "react";
import Table from "rc-table";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch, type RootState } from '@/redux/store';
import { getSliderData, createNewSlide, deleteSlide, updateSlide } from '@/redux/slices/sliderSlice';
import Loader from "@/components/loader";
import TablePagination from "@/components/backend/table/pagination";
import CreateSlideForm from "@/components/backend/marketing/slider/createSlideForm";
import { setPopup } from "@/redux/slices/popupSlice";
import { format } from "date-fns";


// react icons import
import { RiArrowGoBackLine } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { CgAdd } from 'react-icons/cg';
import { FiDelete, FiEdit } from 'react-icons/fi';
import Modal from "@/components/modal";
import dynamic from "next/dynamic";
import SlideEditForm from "@/components/backend/marketing/slider/slideEditForm";



const Slider = () => {
  const router = useRouter();

  const [showSettings, setShowSettings] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  // Create Slide
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [slideData, setNewSlideData] = useState({});
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreate = () => {
    //console.log("New slide Submitted");
    //console.log(slideData);
    dispatch(createNewSlide({ slideData })).then((res) => {
      if (res.type === 'slider/createNewSlide/fulfilled') {
        //router.push('/marketing/slider');
        //router.refresh();
        setShowCreateForm(false);
        dispatch(
          setPopup({
            type: 'success',
            message: 'New slide added!',
            show: true
          }));
        setShowEditForm(false);

      } else {
        dispatch(
          setPopup({
            type: 'failed',
            message: res.payload.response.data.message,
            show: true,
          }));
      }
    });

    dispatch(getSliderData());
    setTimeout(() => {
      dispatch(setPopup({
        show: false,
        type: '',
        message: ''
      }))
    }, 5000)
  }

  // Edit Slide
  const [selectedSlide, setSelectedSlide] = useState<any>('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedSlideData, setEditedSlideData] = useState({});

  const handleEditSlideData = () => {
    //alert("hello");
    //console.log("Updated data");
    //console.log(editedSlideData);

    // dispatch(updateSlide({ id: selectedSlide._id, editedSlideData }));
    dispatch(updateSlide({ id: selectedSlide._id, editedSlideData })).then((res:any) => {
      console.log('Successfully Updated');
    })
  }

  // Delete Slide
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  

  const handleDelete = () => {
    // console.log("Delete request");
    const id = selectedSlide._id;
    // console.log(id);
    dispatch(deleteSlide({ id })).then((res) => {
      //console.log(res);   // show detailed with error parameters
      if (res.type === 'slider/deleteSlide/fulfilled') {
        dispatch(setPopup({
          type: 'success',
          // message: 'Slide deleted!',
          message: res.payload.data,
          show: true
        }));
      } else {
        dispatch(setPopup({
          type: 'failed',
          message: res.payload.response.data.message,
          show: true
        }));
      }
    });

    dispatch(getSliderData());
    setTimeout(() => {
      dispatch(setPopup({
        show: false,
        type: '',
        message: ''
      }))
    }, 5000)
  }

  const sliderData = useSelector((state: RootState) => state.sliderReducer.getSliderData);

  useEffect(() => {
    dispatch(getSliderData());
  }, [dispatch])
  //console.log(sliderData);

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
              setSelectedSlide(data);
            }}
          />
          <FiDelete className='space-x-2 h-6 w-6 text-red-500 cursor-pointer'
            onClick={() => {
              setShowDeleteModal(true);
              setSelectedSlide(data);
            }}>
          </FiDelete>
        </div>
      ),
    },
  ];

  const { data, status } = sliderData;
  const allData = data;
  //console.log(data);


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

      {/* Create Slide Form*/}
      {showCreateForm ? (
        <CreateSlideForm setNewSlideData={setNewSlideData} setShowCreateModal={setShowCreateModal} />
      ) : null}
      {showCreateModal ? (
        <Modal
          handleConfirm={handleCreate}
          confirmText='Yes'
          footer={true}
          showModal={showCreateModal}
          setShowModal={setShowCreateModal}
          title='Are you sure you want to add?'
        ></Modal>
      ) : null}

      {/* Edit Slide */}
      <div className='my-4'>
        {showEditForm ? (
          <SlideEditForm setEditedSlideData={setEditedSlideData} setShowEditModal={setShowEditModal} selectedSlide={selectedSlide}/>
        ) : null}
      </div>
      {showEditModal ? (
        <Modal
          handleConfirm={handleEditSlideData}
          confirmText="Update"
          footer={true}
          showModal={ showEditModal }
          setShowModal={setShowEditModal}
          title='Are you sure you want to update?'
        ></Modal>
      ): null}

      {/* Delete Slide */}
      {showDeleteModal ? (
        <Modal
          handleConfirm={handleDelete}
          confirmText='Delete'
          footer={true}
          showModal={showDeleteModal}
          setShowModal={setShowDeleteModal}
          title='Are you sure you want to delete?'>
        </Modal>
      ) : null}


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
    </div>
  )
}

export default Slider
