import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Image from 'next/image';
import * as Yup from 'yup';

const SlideEditForm = ({ selectedSlide, setShowEditModal, setEditedSlideData }: any) => {
    const [thumbnail, setThumbnail] = useState<any>();
    const EditSlideSchema = Yup.object().shape({
        headingOne: Yup.string().required('Heading is required'),
        headingTwo: Yup.string(),
        image: Yup.mixed().test(
            'fileSize',
            'Image size will be less than  2MB',
            (value: any) => (value?.size ? value.size <= 1000 * 2000 : true)
        )
            .required('Thumbnail is required'),

        paragraph: Yup.string()
            .required('Paragraph is required')
            .test(
                'paragraph',
                'Must not exceed 200 characters',
                (val): any => val && val.toString().length <= 200
            ),

        link: Yup.string(),
    });
    return (
        <div className='font-lato relative'>
            <div className='w-fullrounded-md'>
                <div className='text-gray-800 max-w-container'>
                    <div>
                        {/* for someone else information */}

                        <div className='my-4'>
                            <Formik
                                initialValues={{
                                    headingOne: selectedSlide.headingOne,
                                    headingTwo: selectedSlide.headingTwo,
                                    link: selectedSlide.link,
                                    paragraph: selectedSlide.paragraph,
                                    image: selectedSlide.image
                                }}
                                validationSchema={EditSlideSchema}
                                onSubmit={(values: any) => {
                                    //console.log(values);
                                    const data = {
                                        headingOne: values.headingOne,
                                        headingTwo: values.headingTwo,
                                        link: values.link,
                                        paragraph: values.paragraph,
                                        image: values.image ? values.image : selectedSlide.image,
                                        //isActive: isOn,
                                      };
                                      setEditedSlideData(data);
                                      setShowEditModal(true);
                                }}
                            >
                                {({ errors, touched, setFieldValue }: any) => (
                                <Form className='mt-4 text-start font-lato'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div className='relative col-span-2'>
                                            {thumbnail ? (
                                                <Image
                                                    src={thumbnail}
                                                    height={1080}
                                                    width={1920}
                                                    alt='thumb'
                                                    className='h-500 w-full object-cover rounded-md'
                                                ></Image>
                                            ) : (
                                                <Image
                                                    src={ process.env.NEXT_PUBLIC_SERVER_HOST + '/' + selectedSlide.image}
                                                    height={1080}
                                                    width={1920}
                                                    alt='thumb'
                                                    className='h-500 w-full object-cover rounded-md'
                                                ></Image>
                                            )}
                                            <label htmlFor='' className='form_label'>
                                                Banner (width*height = 1920*1080)
                                            </label>
                                            <Field
                                                name='image'
                                                value={undefined}
                                                onChange={(e: any) => {
                                                    // validateImageDimensions(e.target.files[0],setDimension)

                                                    setFieldValue('image', e.target.files[0]);
                                                    setThumbnail(
                                                        URL.createObjectURL(e.target.files[0])
                                                    );
                                                }}
                                                type='file'
                                                className='bg-gray-50 text-gray-800 text-red border-[1px]  focus:outline-blue-300 focus:outline-1 text-sm py-1 my-1 h-10 w-full px-2 rounded-md outline-none'
                                                placeholder='Upload image'
                                            />

                                            <div>
                                                <small className='text-red-400 mt-1'>
                                                    <ErrorMessage name='image' />
                                                </small>
                                            </div>
                                        </div>
                                        <div className='relative col-span1 md:col-span-2'>
                                            <label htmlFor='' className='form_label'>
                                                Heading One
                                            </label>
                                            <Field
                                                name='headingOne'
                                                placeholder='Heading One'
                                                // defaultValue={selectedSlide.headingOne}
                                                className='border-[1px]  outline-none text-gray-800 bg-white w-full  h-10  text-sm px-2 py-1 my-1 rounded-md '
                                            ></Field>
                                            <div>
                                                <small className='text-red-400 mt-1'>
                                                    <ErrorMessage name='headingOne' />
                                                </small>
                                            </div>
                                        </div>
                                        <div className='relative col-span1 md:col-span-2'>
                                            <label htmlFor='' className='form_label'>
                                                Heading Two
                                            </label>
                                            <Field
                                                name='headingTwo'
                                                type='text'
                                                // defaultValue={selectedSlide.headingTwo}
                                                placeholder='Heading Two'
                                                className='border-[1px]  outline-one text-gray-800 bg-white w-full  h-10  text-sm px-2 py-1 my-1 rounded-md '
                                            ></Field>
                                            <div>
                                                <small className='text-red-400 mt-1'>
                                                    <ErrorMessage name='headingTwo' />
                                                </small>
                                            </div>
                                        </div>
                                        <div className='relative col-span1 md:col-span-2'>
                                            <label htmlFor='' className='form_label'>
                                                Paragraph
                                                <span className='text-sm'>(max 200 characters)</span>
                                            </label>
                                            <Field
                                                name='paragraph'
                                                as='textarea'
                                                className='my-2'
                                            >
                                                {/*  {({ field }: any) => (
                                                    <ReactQuill
                                                        value={field.value}
                                                        onChange={field.onChange(field.name)}
                                                        className=' my-4'
                                                        formats={formats}
                                                        modules={modules}
                                                        bounds={'#root'}
                                                    />
                                                )} */}
                                            </Field>
                                            <div>
                                                <small className='text-red-400 mt-1'>
                                                    <ErrorMessage name='paragraph' />
                                                </small>
                                            </div>
                                        </div>

                                        <div className='relative'>
                                            <label htmlFor='' className='form_label'>
                                                Link
                                            </label>
                                            <Field
                                                name='link'
                                                type='text'
                                                className='bg-gray-50 text-gray-800 text-red border-[1px]  focus:outline-blue-300 focus:outline-1 text-sm py-1 my-1 h-10 w-full  px-2 rounded-md outline-none'
                                                placeholder='Enter link'
                                            />
                                            <div>
                                                <small className='text-red-400 mt-1'>
                                                    <ErrorMessage name='link' />
                                                </small>
                                            </div>
                                        </div>
                                        <div className='toggle flex_center space-x-4 w-max col-span-2'>
                                            <p className='font-garet_bold text-xl'>Active</p>
                                            {/* <Toggle isOn={isOn} setIsOn={setIsOn} /> */}
                                        </div>
                                    </div>
                                    <button
                                        className='text-xl justify-center items-center flex space-x- mt-6 mb-4 bg-brand_gradient px-4 py-2 rounded-lg text-white w-max'
                                        type='submit'
                                    >
                                        submit
                                    </button>
                                </Form>
                                )} 
                            </Formik>
                        </div>

                        {/* gift card for myself form */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideEditForm
