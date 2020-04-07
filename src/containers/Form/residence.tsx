import React, { FC, useState } from "react"
import Heading from "../../components/Heading"
import Flex from "../../components/Flex"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"

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
      <Heading textAlign="left" m={0}>
        {coApplicant ? "Dirección del Co-aplicante" : "Dirección"}
      </Heading>
      <Flex display={["row", "column"]}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input
            label="Dirección"
            value={coApplicant ? CoApplicantAddress : address}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantAddress" : "address"
              setFieldValue(field, e.target.value)
            }}
          />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input
            label="Ciudad"
            value={coApplicant ? CoApplicantCity : city}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantCity" : "city"
              setFieldValue(field, e.target.value)
            }}
          />
        </Flex>
      </Flex>
      <Flex display={["row", "column"]} mt={3}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input
            label="Estado"
            value={coApplicant ? CoApplicantState : state}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantState" : "state"
              setFieldValue(field, e.target.value)
            }}
          />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input
            label="Código postal"
            value={coApplicant ? CoApplicantZipCode : zipCode}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantZipCode" : "zipCode"
              setFieldValue(field, e.target.value)
            }}
          />
        </Flex>
      </Flex>
      <Flex display={["row", "column"]} mt={3}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
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
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
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
        </Flex>
      </Flex>
      <TextArea>¿Resides aquí por menos de 2 años?</TextArea>
      <Flex>
        <Flex mr={2}>
          <Input
            checked={lessThan2}
            type="checkbox"
            onClick={() => setLessThan2(prevState => !prevState)}
          />
          <span>Si</span>
        </Flex>
        <Flex>
          <Input
            checked={!lessThan2}
            type="checkbox"
            onClick={() => setLessThan2(prevState => !prevState)}
          />
          <span>No</span>
        </Flex>
      </Flex>
      {lessThan2 && (
        <>
          <TextArea>Dirección anterior</TextArea>
          <Flex>
            <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
              <Input label="Dirección" 
              value={coApplicant ? CoApplicantPreviousAddress : previousAddress}
              onChange={(e: any) => {
                const field = coApplicant
                  ? "CoApplicantPreviousAddress"
                  : "previousAddress"
                setFieldValue(field, e.target.value)
              }}
              />
            </Flex>
            <Flex flexGrow={1} borderBottom="solid 1px">
              <Input label="Ciudad" 
               value={coApplicant ? CoApplicantPreviousCity : previousCity}
               onChange={(e: any) => {
                 const field = coApplicant
                   ? "CoApplicantPreviousCity"
                   : "previousCity"
                 setFieldValue(field, e.target.value)
               }}
              />
            </Flex>
          </Flex>
          <Flex display={["row", "column"]} mt={3}>
            <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
              <Input label="Estado" 
                value={coApplicant ? CoApplicantPreviousState : previousState}
                onChange={(e: any) => {
                  const field = coApplicant
                    ? "CoApplicantPreviousState"
                    : "previousState"
                  setFieldValue(field, e.target.value)
                }}
              />
            </Flex>
            <Flex flexGrow={1} borderBottom="solid 1px">
              <Input label="Código postal" 
                 value={coApplicant ? CoApplicantPreviousZipCode : previousZipCode}
                 onChange={(e: any) => {
                   const field = coApplicant
                     ? "CoApplicantPreviousZipCode"
                     : "previousZipCode"
                   setFieldValue(field, e.target.value)
                 }}
              />
            </Flex>
          </Flex>
          <Flex display={["row", "column"]} mt={3}>
            <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
              <Input label="Tipo de vivienda" 
                  value={coApplicant ? CoApplicantPreviousPropertyType : previousPropertyType}
                  onChange={(e: any) => {
                    const field = coApplicant
                      ? "CoApplicantPreviousPropertyType"
                      : "previousPropertyType"
                    setFieldValue(field, e.target.value)
                  }}
              />
            </Flex>
            <Flex flexGrow={1} borderBottom="solid 1px">
              <Input label="Pago mensual ($)" 
                value={coApplicant ? CoApplicantPreviousMonthlyPayment : previousMonthlyPayment}
                onChange={(e: any) => {
                  const field = coApplicant
                    ? "CoApplicantPreviousMonthlyPayment"
                    : "previousMonthlyPayment"
                  setFieldValue(field, e.target.value)
                }}
              />
            </Flex>
          </Flex>
          <Flex>
            <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
              <Input label="Años" 
                   value={coApplicant ? CoApplicantPreviousResidenceYears : previousResidenceYears}
                   onChange={(e: any) => {
                     const field = coApplicant
                       ? "CoApplicantPreviousResidenceYears"
                       : "previousResidenceYears"
                     setFieldValue(field, e.target.value)
                   }}
              />
            </Flex>
            <Flex flexGrow={1} borderBottom="solid 1px">
              <Input label="Meses" 
                  value={coApplicant ? CoApplicantPreviousResidenceMonths : previousResidenceMonths}
                  onChange={(e: any) => {
                    const field = coApplicant
                      ? "CoApplicantPreviousResidenceMonths"
                      : "previousResidenceMonths"
                    setFieldValue(field, e.target.value)
                  }}
              />
            </Flex>
          </Flex>
        </>
      )}
      <TextArea>Dirección actual</TextArea>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
          <Input label="Años" 
              value={coApplicant ? CoApplicantResidenceYears : residenceYears}
              onChange={(e: any) => {
                const field = coApplicant
                  ? "CoApplicantResidenceYears"
                  : "residenceYears"
                setFieldValue(field, e.target.value)
              }}
          />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Meses" 
            value={coApplicant ? CoApplicantResidenceMonths : residenceMonths}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantResidenceMonths"
                : "residenceMonths"
              setFieldValue(field, e.target.value)
            }}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Residence
