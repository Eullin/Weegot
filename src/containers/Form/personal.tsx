import React, { FC } from "react"
import Heading from "../../components/Heading"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Flex from "../../components/Flex"
import { FormBox } from "./form.styles"

type PersonalProps = {
  name: string
  lastName: string
  birthDate: string
  socialNumber: string
  phone: number
  email: string
  setFieldValue: any;
  onClick: () => void
}

const Personal: FC<PersonalProps> = ({
  name,
  lastName,
  birthDate,
  socialNumber,
  phone,
  email,
  setFieldValue,
  onClick = () => {},
}) => {
  return (
    <FormBox>
      <Heading textAlign="left" m={0}>
        Información personal
      </Heading>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
          <Input label="Nombres" value={name || ""} onChange={(e: any) => setFieldValue('name', e.target.value)}/>
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Apellidos" value={lastName || ""} onChange={(e: any) => setFieldValue('lastName', e.target.value)}/>
        </Flex>
      </Flex>

      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3} mr={5}>
          <Input type="date" label="Fecha de nacimiento" value={birthDate || ""} onChange={(e: any) => setFieldValue('birthDate', e.target.value)}/>
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3}>
          <Input
          placeholder="000-00-0000"
            type="number"
            label="Numero de seguridad social"
            value={socialNumber || ""}
            onChange={(e: any) => setFieldValue('socialNumber', e.target.value)}
          />
        </Flex>
      </Flex>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3} mr={5}>
            <Input type="tel" label="Teléfono" onChange={(e: any) => setFieldValue('phone', e.target.value)}/>
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mt={3}>
        	<Input type="email" label="Email" value={email || ""} onChange={(e: any) => setFieldValue('email', e.target.value)}/>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" mt={4} >
          <Button onClick={onClick}>Next</Button>
      </Flex>
    </FormBox>
  )
}

export default Personal
