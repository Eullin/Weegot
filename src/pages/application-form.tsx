import React, { useState } from "react"
import { Link } from "gatsby"
import { useFormik } from "formik"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Personal, Residence, Work } from "../containers/Form"
import MainBox from "../components/MainBox"

const ApplicationForm = () => {
  const [personalDone, setPersonalDone] = useState(false)
  const [residenceDone, setResidenceDone] = useState(false)

  const {
    isValid,
    setValues,
    values,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      birthDate: "",
      socialNumber: "",
      email: "",
      phone: 123,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const personalHandler = () => {
    setPersonalDone(true)
  }

  const residenceHandler = () => {
    setResidenceDone(true)
  }

  const { name, lastName, birthDate, socialNumber, email, phone } = values
  return (
    <Layout>
      <MainBox>
        <SEO title="Page two" />
      <form name="contact" method="POST" data-netlify="true">
        {residenceDone ? (
          <Work />
        ) : personalDone ? (
          <Residence onClick={residenceHandler} />
        ) : (
          <Personal
            name={name}
            lastName={lastName}
            birthDate={birthDate}
            socialNumber={socialNumber}
            email={email}
            phone={phone}
            onClick={personalHandler}
            setFieldValue={setFieldValue}
          />
        )}
        </form>
      </MainBox>
    </Layout>
  )
}

export default ApplicationForm

