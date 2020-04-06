import React, { useState } from "react"
import { Link } from "gatsby"
import { useFormik } from "formik"
import { FormBox } from "../containers/Form/form.styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Personal, Residence, Work } from "../containers/Form"
import MainBox from "../components/MainBox"
import Flex from "../components/Flex"
import Input from "../components/Input"
import TextArea from "../components/TextArea"

const ApplicationForm = () => {
  const [coApplicant, setCoApplicant] = useState(false)

  const coApplicantHandler = () => setCoApplicant(prevState => !prevState)

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

      address: "",
      city: "",
      state: "",
      zipCode: "",
      residenceLessThan2: "",
      residenceYears: "",
      residenceMonths: "",
      propertyType: "",
      monthlyPayment: "",

      workType: "enum",
      employerName: "",
      occupation: "",
      employerAddress: "",
      employerCity: "",
      employerState: "",
      employerZipCode: "",
      timeWork: "",
      workPhone: "",
      monthlySalar: "",

      CoApplicantName: "",
      CoApplicantLastName: "",
      CoApplicantBirthDate: "",
      CoApplicantSocialNumber: "",
      CoApplicantEmail: "",
      CoApplicantPhone: 123,

      CoApplicantAddress: "",
      CoApplicantCity: "",
      CoApplicantState: "",
      CoApplicantZipCode: "",
      CoApplicantResidenceLessThan2: "",
      CoApplicantResidenceYears: "",
      CoApplicantResidenceMonths: "",
      CoApplicantPropertyType: "",
      CoApplicantMonthlyPayment: "",

      CoApplicantWorkType: "enum",
      CoApplicantEmployerName: "",
      CoApplicantOccupation: "",
      CoApplicantEmployerAddress: "",
      CoApplicantEmployerCity: "",
      CoApplicantmEployerState: "",
      CoApplicantEmployerZipCode: "",
      CoApplicantIimeWork: "",
      CoApplicantWorkPhone: "",
      CoApplicantMonthlySalar: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const { name, lastName, birthDate, socialNumber, email, phone } = values
  return (
    <Layout>
      <MainBox>
        <SEO title="Page two" />
        <form name="contact" method="POST" data-netlify="true">
          <FormBox>
            <Personal values={values} setFieldValue={setFieldValue} />
            <Residence values={values} setFieldValue={setFieldValue} />
            <Work
              values={values}
              setFieldValue={setFieldValue}
              coApplicant={coApplicant}
              onClick={coApplicantHandler}
            />
            {coApplicant && (
              <>
                <Personal values={values} setFieldValue={setFieldValue} />
                <Residence values={values} setFieldValue={setFieldValue} />
                <Work values={values} setFieldValue={setFieldValue} />
              </>
            )}
          </FormBox>
        </form>
      </MainBox>
    </Layout>
  )
}

export default ApplicationForm
