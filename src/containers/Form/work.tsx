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
  const [typeWork, setTypeWork] = useState()

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
      <Heading textAlign="left" m={0}>
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
            label="Nombre del empleador actual"
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
            label="Ocupación"
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
            label="Dirección del empleador actual"
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
        <Input
          type="text"
          label="Código postal"
          value={coApplicant ? CoApplicantEmployerZipCode : employerZipCode}
          onChange={(e: any) => {
            const field = coApplicant
              ? "CoApplicantEmployerZipCode"
              : "employerZipCode"
            setFieldValue(field, e.target.value)
          }}
        />
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
        <InnerBox>
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
      <TextArea>¿Co-aplicante?</TextArea>
      <Flex>
        <InnerBox flexGrow={0} borderBottom="none">
          <Input checked={coApplicant} type="checkbox" onClick={onClick} />
          <span>Si</span>
        </InnerBox>
        <InnerBox flexGrow={0} mx={3} borderBottom="none">
          <Input checked={!coApplicant} type="checkbox" onClick={onClick} />
          <span>No</span>
        </InnerBox>
      </Flex>
    </>
  )
}

export default Work
