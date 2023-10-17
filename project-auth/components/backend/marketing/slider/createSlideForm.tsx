import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const createSlideForm = ({ setShowCreateModal, setNewSlideData }: any) => {
    const slideSize = 1024 * 512;
    const SUPPORTED_FORMATS = [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/webp',
    ];

    const slideSchema = Yup.object().shape({
        headingOne: Yup.string().required('Heading is required'),
        headingTwo: Yup.string().required('Sub Heading is required'),
        image: Yup.mixed()
        .test(
          'fileSize',
          'Image size will be less than 1 MB',
          (value: any) => value === null || (value && value.size <= slideSize)
        )
        .required('Thumbnail is required')
        .test(
          'fileFormat',
          'Unsupported Format',
          (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
        paragraph: Yup.string()
                .required('Paragraph is required')
                .test(
                    'paragraph',
                    'Must not exceed 200 characters',
                    (val): any => val && val.toString().length <= 200
                ),
        link: Yup.string()
    })

    return (
        <div className='font-lato relative'>
            <div className='w-fullrounded-md'>
                <div className='text-gray-800 max-w-container'>
                    <div>
                        <div className='my-4'>
                            <Formik initialValues={{
                                headingOne: '',
                                headingTwo: '',
                                link: '',
                                paragraph: '',
                                image: '',
                            }}
                                validationSchema={slideSchema}
                                onSubmit={(values: any) => {
                                    const data = {
                                        headingOne: values.headingOne,
                                        headingTwo: values.headingTwo,
                                        link: values.link,
                                        paragraph: values.paragraph,
                                        // image: 'myimage.jpg',
                                        image: values.image
                                    };
                                    setNewSlideData(data);
                                    setShowCreateModal(true);
                                }}
                            >
                                {( { errors, touched, setFieldValue }: any) => (
                                    <Form className='mt-4 text-start font-lato'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                            <div className='relative col-span1 md:col-span-2'>
                                                <label htmlFor='' className='form_label'>
                                                    Heading One
                                                </label>
                                                <Field name='headingOne'
                                                       placeholder='Heading One'
                                                       className='border-[1px]  outline-none text-gray-800 bg-white w-full  h-10  text-sm px-2 py-1 my-1 rounded-md '>
                                                </Field>
                                                <div>
                                                    {errors.headingOne && touched.headingOne ? (
                                                        <small className='text-red-400 mt-1'>
                                                            {errors.headingOne}
                                                        </small>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='relative col-span1 md:col-span-2'>
                                                <label htmlFor='' className='form_label'>
                                                    Heading Two
                                                </label>
                                                <Field
                                                    name='headingTwo'
                                                    type='text'
                                                    placeholder='Heading Two'
                                                    className='border-[1px]  outline-one text-gray-800 bg-white w-full  h-10  text-sm px-2 py-1 my-1 rounded-md '
                                                ></Field>
                                                <div>
                                                    {errors.headingTwo && touched.headingTwo ? (
                                                        <small className='text-red-400 mt-1'>
                                                            {errors.headingTwo}
                                                        </small>
                                                    ) : null}
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
                                                    placeholder='Paragraph'
                                                    className='border-[1px] h-[120px]  outline-none text-gray-800 bg-white w-full text-sm px-2 py-1 my-1 rounded-md '
                                                ></Field>
                                                <div>
                                                    {errors.paragraph && touched.paragraph ? (
                                                        <small className='text-red-400 mt-1'>
                                                            {errors.paragraph}
                                                        </small>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className='relative'>
                                                <label htmlFor='' className='form_label'>
                                                    Slide (width*height = 1920*1080)
                                                </label>
                                                <Field
                                                    name='image'
                                                    value={undefined}
                                                    onChange={(e: any) => {
                                                        // validateImageDimensions(e.target.files[0],setDimension)
                                                        setFieldValue('image', e.target.files[0]);
                                                    }}
                                                    type='file'
                                                    className='bg-gray-50 text-gray-800 text-red border-[1px]  focus:outline-blue-300 focus:outline-1 text-sm py-1 my-1 h-10 w-full px-2 rounded-md outline-none'
                                                    placeholder='Upload image'
                                                />

                                                <div>
                                                    {errors.image && touched.image ? (
                                                        <small className='text-red-400 mt-1'>
                                                            {errors.image}
                                                        </small>
                                                    ) : null}
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
                                                    {errors.link && touched.link ? (
                                                        <small className='text-red-400 mt-1'>
                                                            {errors.link}
                                                        </small>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <button className='dashboard_btn' type='submit'>
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

export default createSlideForm
