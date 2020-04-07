import React, { FC } from "react"
import Heading from "../../components/Heading"
import Input from "../../components/Input"
import OuterFlex from "../../components/OuterFlex"
import InnerBox from "../../components/InnerBox"

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
  const {
    name,
    CoApplicantName,
    lastName,
    CoApplicantLastName,
    birthDate,
    CoApplicantBirthDate,
    socialNumber,
    CoApplicantSocialNumber,
    email,
    CoApplicantEmail,
    phone,
    CoApplicantPhone,
  } = values

  return (
    <>
      <Heading textAlign="left" m={0}>
        {coApplicant
          ? "Información personal del Co-aplicante"
          : "Información personal"}
      </Heading>
      <OuterFlex>
        <InnerBox mt={0}>
          <Input
            label="Nombre"
            value={coApplicant ? CoApplicantName : name}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantName" : "name"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            label="Apellido"
            value={coApplicant ? CoApplicantLastName : lastName}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantLastName" : "lastName"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>

      <OuterFlex>
        <InnerBox>
          <Input
            type="date"
            label="Fecha de nacimiento"
            value={coApplicant ? CoApplicantBirthDate : birthDate}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantBirthDate" : "birthDate"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            placeholder="000-00-0000"
            type="number"
            label="Numero de seguridad social"
            value={coApplicant ? CoApplicantSocialNumber : socialNumber}
            onChange={(e: any) => {
              const field = coApplicant
                ? "CoApplicantSocialNumber"
                : "socialNumber"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
      <OuterFlex>
        <InnerBox>
          <Input
            type="tel"
            label="Teléfono"
            value={coApplicant ? CoApplicantPhone : phone}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantPhone" : "phone"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
        <InnerBox>
          <Input
            type="email"
            label="Email"
            value={coApplicant ? CoApplicantEmail : email}
            onChange={(e: any) => {
              const field = coApplicant ? "CoApplicantEmail" : "email"
              setFieldValue(field, e.target.value)
            }}
          />
        </InnerBox>
      </OuterFlex>
    </>
  )
}

export default Personal
