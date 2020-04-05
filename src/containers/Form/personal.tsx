import React, { FC } from "react"
import Heading from "../../components/Heading"
import Input from "../../components/Input"

type PersonalProps = {
  name: string
  lastName: string
  birthDate: string
  socialNumber: number
  phone: number
  email: string
}

const Personal: FC<PersonalProps> = ({
  name,
  lastName,
  birthDate,
  socialNumber,
  phone,
  email,
}) => {
  return (
    <div>
      <Heading textAlign="left">Información personal</Heading>
      <Input label="Name" placeholder='Name' value={name || ""}/>
      <Input label="Lastname" placeholder="Apellido" value={lastName || ""}/>
    </div>
  )
}

export default Personal
