import React, { useState } from "react"
import { useFormik } from "formik"
import { FormBox } from "../containers/Form/form.styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Personal, Residence, Work } from "../containers/Form"
import MainBox from "../components/MainBox"
import Heading from "../components/Heading"
import Button from "../components/Button"

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
      residenceYears: "",
      residenceMonths: "",
      propertyType: "",
      monthlyPayment: "",
      previousAddress: "",
      previousCity: "",
      previousState: "",
      previousZipCode: "",
      previousPropertyType: "",
      previousResidenceYears: "",
      previousResidenceMonths: "",
      previousMonthlyPayment: "",

      workType: "enum",
      employerName: "",
      occupation: "",
      employerAddress: "",
      employerCity: "",
      employerState: "",
      employerZipCode: "",
      workMonths: "",
      workYears: "",
      workPhone: "",
      monthlySalary: "",

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
      CoApplicantResidenceYears: "",
      CoApplicantResidenceMonths: "",
      CoApplicantPropertyType: "",
      CoApplicantMonthlyPayment: "",
      CoApplicantPreviousAddress: "",
      CoApplicantPreviousCity: "",
      CoApplicantPreviousState: "",
      CoApplicantPreviousZipCode: "",
      CoApplicantPreviousPropertyType: "",
      CoApplicantPreviousResidenceYears: "",
      CoApplicantPreviousResidenceMonths: "",
      CoApplicantPreviousMonthlyPayment: "",

      CoApplicantWorkType: "enum",
      CoApplicantEmployerName: "",
      CoApplicantOccupation: "",
      CoApplicantEmployerAddress: "",
      CoApplicantEmployerCity: "",
      CoApplicantmEployerState: "",
      CoApplicantEmployerZipCode: "",
      CoApplicantWorkMonths: "",
      CoApplicantWorkYears: "",
      CoApplicantWorkPhone: "",
      CoApplicantMonthlySalary: "",
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Layout>
      <MainBox>
        <SEO title="Page two" />
        <form name="contact" method="POST" data-netlify="true">
          <FormBox>
            <Heading>Aplicación de crédito</Heading>
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
                <Personal values={values} setFieldValue={setFieldValue} coApplicant={coApplicant}/>
                <Residence values={values} setFieldValue={setFieldValue} coApplicant={coApplicant}/>
                <Work values={values} setFieldValue={setFieldValue} coApplicant={coApplicant}/>
              </>
            )}
            <Button onClick={handleSubmit} text="Enviar" />
          </FormBox>
        </form>
      </MainBox>
    </Layout>
  )
}

export default ApplicationForm
