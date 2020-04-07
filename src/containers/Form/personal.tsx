import React, { FC } from "react"
import Heading from "../../components/Heading"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Flex from "../../components/Flex"

type PersonalProps = {
  values: any
  setFieldValue: any
  coApplicant?: boolean
}

const Personal: FC<PersonalProps> = ({
  values,
  setFieldValue,
  coApplicant,
}) => {
  const { name, CoApplicantName, lastName, CoApplicantLastName, birthDate, CoApplicantBirthDate, socialNumber, CoApplicantSocialNumber, email, CoApplicantEmail, phone, CoApplicantPhone } = values

  return (
    <>
      <Heading textAlign="left" m={0}>
        {coApplicant
          ? "Información personal del Co-aplicante"
          : "Información personal"}
      </Heading>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
          <Input
            label="Nombre"
            value={coApplicant ? CoApplicantName : name}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantName" : "name"
              setFieldValue(field, e.target.value)
            }}
          />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input
            label="Apellido"
            value={coApplicant ? CoApplicantLastName : lastName}
            onChange={(e: any) => { 
              const field = coApplicant ? "CoApplicantLastName" : "lastName"
              setFieldValue(field, e.target.value)}}
          />
        </Flex>
      </Flex>

      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3} mr={5}>
          <Input
            type="date"
            label="Fecha de nacimiento"
            value={coApplicant ? CoApplicantBirthDate : birthDate}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantBirthDate" : "birthDate"
              setFieldValue(field, e.target.value)}}
          />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3}>
          <Input
            placeholder="000-00-0000"
            type="number"
            label="Numero de seguridad social"
            value={coApplicant ? CoApplicantSocialNumber : socialNumber}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantSocialNumber" : "socialNumber"
              setFieldValue(field, e.target.value)}}
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3} mr={5}>
          <Input
            type="tel"
            label="Teléfono"
            value={coApplicant ? CoApplicantPhone : phone}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantPhone" : "phone"
              setFieldValue(field, e.target.value)}}
          />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3}>
          <Input
            type="email"
            label="Email"
            value={coApplicant ? CoApplicantEmail : email}
            onChange={(e: any) =>{ 
              const field = coApplicant ? "CoApplicantEmail" : "email"
              setFieldValue(field, e.target.value)}}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Personal
