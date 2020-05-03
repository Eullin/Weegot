import React, { FC, useState } from "react"
import Heading from "../../components/Heading"
import Flex from "../../components/Flex"
import Input from "../../components/Input"
import Select from "../../components/Select"
import TextArea from "../../components/TextArea"
import OuterFlex from "../../components/OuterFlex"
import InnerBox from "../../components/InnerBox"

type WorkProps = {
  values: any
  setFieldValue: any
  onClick?: () => void
  coApplicant?: boolean
}

const Work: FC<WorkProps> = ({
  values,
  setFieldValue,
  onClick,
  coApplicant,
}) => {
  const [typeWork, setTypeWork] = useState("otros")

  const {
    employerName,
    CoApplicantEmployerName,
    CoApplicantOccupation,
    occupation,
    CoApplicantEmployerAddress,
    employerAddress,
    employerCity,
    CoApplicantEmployerCity,
    CoApplicantmEployerState,
    employerState,
    employerZipCode,
    workMonths,
    workYears,
    workPhone,
    monthlySalary,
    CoApplicantWorkMonths,
    CoApplicantWorkYears,
    CoApplicantWorkPhone,
    CoApplicantMonthlySalary,
    CoApplicantEmployerZipCode,
  } = values

  const handleChange = (e: any) => {
    setTypeWork(e.target.value)
  }

  return (
    <>
      <Heading as="h2" textAlign="left" m={0}>
        {coApplicant
          ? "Situación de empleo del Co-aplicante"
          : "Situación de empleo"}
      </Heading>
      <OuterFlex>
        <InnerBox>
          <Select
            name="type-work"
            id="typeWork"
            value={typeWork}
            onChange={handleChange}
          >
            <option value="selfEmployed">Por si mismo</option>
            <option value="otros">Otros</option>
          </Select>
        </InnerBox>
        <InnerBox>
          <Input
            label={
              typeWork === "otros"
                ? "Nombre del empleador actual"
                : "Nombre de compañía"
            }
            value={coApplicant ? CoApplicantEmployerName : employerName}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantEmployerName"
                : "employerName"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            type="text"
            label={typeWork === "otros" ? "Ocupación" : "Tipo de negocio"}
            value={coApplicant ? CoApplicantOccupation : occupation}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantOccupation" : "occupation"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            type="text"
            label={
              typeWork === "otros"
                ? "Dirección del empleador actual"
                : "Dirección"
            }
            value={coApplicant ? CoApplicantEmployerAddress : employerAddress}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantEmployerAddress"
                : "employerAddress"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            type="text"
            label="Ciudad"
            value={coApplicant ? CoApplicantEmployerCity : employerCity}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantEmployerCity"
                : "employerCity"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            type="text"
            label="Estado"
            value={coApplicant ? CoApplicantmEployerState : employerState}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantmEployerState"
                : "employerState"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            type="number"
            label="Código postal"
            value={coApplicant ? CoApplicantEmployerZipCode : employerZipCode}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantEmployerZipCode"
                : "employerZipCode"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            label="Años"
            value={coApplicant ? CoApplicantWorkYears : workYears}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantWorkYears" : "workYears"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            type="tel"
            label="Teléfono del trabajo"
            value={coApplicant ? CoApplicantWorkPhone : workPhone}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantWorkPhone" : "workPhone"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            label="Ingresos mensuales ($)"
            value={coApplicant ? CoApplicantMonthlySalary : monthlySalary}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantMonthlySalary"
                : "monthlySalary"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox maxWidth="40%">
          <Input
            label="Meses"
            value={coApplicant ? CoApplicantWorkMonths : workMonths}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantWorkMonths" : "workMonths"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        </OuterFlex>
        <Flex flexDirection="column" minWidth="50%" paddingY={3}>
          <Heading as="h3" textAlign="left" paddingBottom={3}>
            ¿Co-aplicante?
          </Heading>
          <Flex mt={1}>
            <Flex mr={3}>
              <Input checked={coApplicant} type="checkbox" onClick={onClick} />
              <Heading as="span" mt={0} pl={1}>Si</Heading>
            </Flex>
            <Input checked={!coApplicant} type="checkbox" onClick={onClick} />
            <Heading as="span" mt={0} pl={1}>No</Heading>
          </Flex>
        </Flex>
      
    </>
  )
}

export default Work
