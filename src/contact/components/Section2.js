import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Section2 = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      companyName: '',
      title: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('This field is required'),
      companyName: Yup.string().required('This field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
      title: Yup.string().required('This field is required'),
    }),
  })

  return (
    <section className="relative overflow-hidden">
      <form onSubmit={formik.handleSubmit} className="col mx-6 mb-[88px] gap-6">
        <div>
          <div
            className={`leading-[25px] pb-[17px] px-3.5 border-b ${
              formik.errors.name
                ? 'border-b-lightCoral'
                : 'border-b-raptureBlue'
            }`}
          >
            <input
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={`outline-none placeholder:opacity-60 w-full bg-transparent tracking-[-0.115px] ${
                formik.errors.name &&
                'placeholder:text-lightCoral text-lightCoral'
              }`}
              placeholder="Name"
              type="text"
            />
          </div>
          {formik.errors.name ? (
            <div className="text-[10px] ml-4 text-lightCoral mt-2">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div>
          <div
            className={`leading-[25px] pb-[17px] px-3.5 border-b ${
              formik.errors.email
                ? 'border-b-lightCoral'
                : 'border-b-raptureBlue'
            }`}
          >
            <input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`outline-none placeholder:opacity-60 w-full bg-transparent tracking-[-0.115px] ${
                formik.errors.email &&
                'placeholder:text-lightCoral text-lightCoral'
              }`}
              placeholder="Email Address"
              type="email"
            />
          </div>
          {formik.errors.email ? (
            <div className="text-[10px] ml-4 text-lightCoral mt-2">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div>
          <div
            className={`leading-[25px] pb-[17px] px-3.5 border-b ${
              formik.errors.companyName
                ? 'border-b-lightCoral'
                : 'border-b-raptureBlue'
            }`}
          >
            <input
              id="companyName"
              name="companyName"
              onChange={formik.handleChange}
              value={formik.values.companyName}
              className={`outline-none placeholder:opacity-60 w-full bg-transparent tracking-[-0.115px] ${
                formik.errors.companyName &&
                'placeholder:text-lightCoral text-lightCoral'
              }`}
              placeholder="Company Name"
              type="text"
            />
          </div>
          {formik.errors.companyName ? (
            <div className="text-[10px] ml-4 text-lightCoral mt-2">
              {formik.errors.companyName}
            </div>
          ) : null}
        </div>
        <div>
          <div
            className={`leading-[25px] pb-[17px] px-3.5 border-b ${
              formik.errors.title
                ? 'border-b-lightCoral'
                : 'border-b-raptureBlue'
            }`}
          >
            <input
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              className={`outline-none placeholder:opacity-60 w-full bg-transparent tracking-[-0.115px] ${
                formik.errors.title &&
                'placeholder:text-lightCoral text-lightCoral'
              }`}
              placeholder="Title"
              type="text"
            />
          </div>
          {formik.errors.title ? (
            <div className="text-[10px] ml-4 text-lightCoral mt-2">
              {formik.errors.title}
            </div>
          ) : null}
        </div>
        <div>
          <div
            className={`leading-[25px] pb-[17px] px-3.5 border-b ${
              formik.errors.message
                ? 'border-b-lightCoral'
                : 'border-b-raptureBlue'
            }`}
          >
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              className={`outline-none placeholder:opacity-60 w-full bg-transparent tracking-[-0.115px] ${
                formik.errors.message &&
                'placeholder:text-lightCoral text-lightCoral'
              }`}
              placeholder="Message"
            ></textarea>
          </div>
          {formik.errors.message ? (
            <div className="text-[10px] ml-4 text-lightCoral mt-2">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <button
          className="self-start bg-white rounded-[24px] px-8 py-2.5 text-deepJungleGreen cursor-pointer"
          type="submit"
        >
          submit
        </button>
      </form>
    </section>
  )
}

export default Section2
