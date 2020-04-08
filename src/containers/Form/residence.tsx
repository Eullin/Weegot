import React, { FC, useState } from "react"
import Heading from "../../components/Heading"
import Flex from "../../components/Flex"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import OuterFlex from "../../components/OuterFlex"
import InnerBox from "../../components/InnerBox"

type ResidenceProps = {
  values: any
  setFieldValue: any
  coApplicant?: boolean
}

const Residence: FC<ResidenceProps> = ({
  values,
  setFieldValue,
  coApplicant,
}) => {
  const [lessThan2, setLessThan2] = useState(true)

  const {
    address,
    CoApplicantAddress,
    CoApplicantCity,
    city,
    CoApplicantState,
    state,
    CoApplicantZipCode,
    zipCode,
    CoApplicantPropertyType,
    propertyType,
    CoApplicantMonthlyPayment,
    monthlyPayment,
    CoApplicantPreviousAddress,
    previousAddress,
    CoApplicantPreviousCity,
    previousCity,
    CoApplicantPreviousState,
    previousState,
    CoApplicantPreviousZipCode,
    previousZipCode,
    CoApplicantPreviousPropertyType,
    CoApplicantPreviousResidenceYears,
    CoApplicantPreviousResidenceMonths,
    previousPropertyType,
    previousResidenceYears,
    previousResidenceMonths,
    CoApplicantPreviousMonthlyPayment,
    previousMonthlyPayment,
    CoApplicantResidenceYears,
    CoApplicantResidenceMonths,
    residenceYears,
    residenceMonths
  } = values

  return (
    <>
      <Heading as="h2" textAlign="left" >
        {coApplicant ? "Dirección del Co-aplicante" : "Dirección"}
      </Heading>
      <OuterFlex>
        <InnerBox>
          <Input
            label="Dirección"
            value={coApplicant ? CoApplicantAddress : address}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantAddress" : "address"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            label="Ciudad"
            value={coApplicant ? CoApplicantCity : city}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantCity" : "city"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            label="Estado"
            value={coApplicant ? CoApplicantState : state}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantState" : "state"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            label="Código postal"
            value={coApplicant ? CoApplicantZipCode : zipCode}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantZipCode" : "zipCode"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            label="Tipo de vivienda"
            value={coApplicant ? CoApplicantPropertyType : propertyType}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantPropertyType"
                : "propertyType"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input 
          label="Pago mensual ($)" 
          value={coApplicant ? CoApplicantMonthlyPayment : monthlyPayment}
          onChange={(e: any) => {
            const field = coApplicant
              ? "CoApplicantMonthlyPayment"
              : "monthlyPayment"
            setFieldValue(field, e.target.value)
          }}
          />
        </InnerBox>
      </OuterFlex>
      <Heading as="h3" textAlign="left">¿Resides aquí por menos de 2 años?</Heading>
      <Flex>
        <Flex mr={3}>
          <Input
            checked={lessThan2}
            type="checkbox"
            onClick={() => setLessThan2(prevState => !prevState)}
          />
          <Heading as="span" mt={0} pl={1}>Si</Heading>
        </Flex>
          <Input
            checked={!lessThan2}
            type="checkbox"
            onClick={() => setLessThan2(prevState => !prevState)}
          />
          <Heading as="span" mt={0} pl={1}>No</Heading>
      </Flex>
      {lessThan2 && (
        <>
          <Heading as="h3" textAlign="left">Dirección anterior</Heading>
          <OuterFlex>
            <InnerBox>
              <Input label="Dirección" 
              value={coApplicant ? CoApplicantPreviousAddress : previousAddress}
              onChange={(e: any) => {
                const field = coApplicant
                  ? "CoApplicantPreviousAddress"
                  : "previousAddress"
                setFieldValue(field, e.target.value)
              }}
              />
            </InnerBox>
            <InnerBox>
              <Input label="Ciudad" 
               value={coApplicant ? CoApplicantPreviousCity : previousCity}
               onChange={(e: any) => {
                 const field = coApplicant
                   ? "CoApplicantPreviousCity"
                   : "previousCity"
                 setFieldValue(field, e.target.value)
               }}
              />
            </InnerBox>
          </OuterFlex>
          <OuterFlex>
            <InnerBox>
              <Input label="Estado" 
                value={coApplicant ? CoApplicantPreviousState : previousState}
                onChange={(e: any) => {
                  const field = coApplicant
                    ? "CoApplicantPreviousState"
                    : "previousState"
                  setFieldValue(field, e.target.value)
                }}
              />
            </InnerBox>
            <InnerBox>
              <Input label="Código postal" 
                 value={coApplicant ? CoApplicantPreviousZipCode : previousZipCode}
                 onChange={(e: any) => {
                   const field = coApplicant
                     ? "CoApplicantPreviousZipCode"
                     : "previousZipCode"
                   setFieldValue(field, e.target.value)
                 }}
              />
            </InnerBox>
          </OuterFlex>
          <OuterFlex>
            <InnerBox>
              <Input label="Tipo de vivienda" 
                  value={coApplicant ? CoApplicantPreviousPropertyType : previousPropertyType}
                  onChange={(e: any) => {
                    const field = coApplicant
                      ? "CoApplicantPreviousPropertyType"
                      : "previousPropertyType"
                    setFieldValue(field, e.target.value)
                  }}
              />
            </InnerBox>
            <InnerBox>
              <Input label="Pago mensual ($)" 
                value={coApplicant ? CoApplicantPreviousMonthlyPayment : previousMonthlyPayment}
                onChange={(e: any) => {
                  const field = coApplicant
                    ? "CoApplicantPreviousMonthlyPayment"
                    : "previousMonthlyPayment"
                  setFieldValue(field, e.target.value)
                }}
              />
            </InnerBox>
          </OuterFlex>
          <OuterFlex>
            <InnerBox>
              <Input label="Años" 
                   value={coApplicant ? CoApplicantPreviousResidenceYears : previousResidenceYears}
                   onChange={(e: any) => {
                     const field = coApplicant
                       ? "CoApplicantPreviousResidenceYears"
                       : "previousResidenceYears"
                     setFieldValue(field, e.target.value)
                   }}
              />
            </InnerBox>
            <InnerBox>
              <Input label="Meses" 
                  value={coApplicant ? CoApplicantPreviousResidenceMonths : previousResidenceMonths}
                  onChange={(e: any) => {
                    const field = coApplicant
                      ? "CoApplicantPreviousResidenceMonths"
                      : "previousResidenceMonths"
                    setFieldValue(field, e.target.value)
                  }}
              />
            </InnerBox>
          </OuterFlex>
        </>
      )}
      <Heading as="h3" textAlign="left">Dirección actual</Heading>
      <OuterFlex>
        <InnerBox>
          <Input label="Años" 
              value={coApplicant ? CoApplicantResidenceYears : residenceYears}
              onChange={(e: any) => {
                const field = coApplicant
                  ? "CoApplicantResidenceYears"
                  : "residenceYears"
                setFieldValue(field, e.target.value)
              }}
          />
        </InnerBox>
        <InnerBox>
          <Input label="Meses" 
            value={coApplicant ? CoApplicantResidenceMonths : residenceMonths}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantResidenceMonths"
                : "residenceMonths"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
    </>
  )
}

export default Residence
