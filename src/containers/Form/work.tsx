import React, { FC } from "react"
import Button from "../../components/Button"
import Heading from "../../components/Heading"
import Flex from "../../components/Flex"
import Input from "../../components/Input"
import Select from "../../components/Select"
import TextArea from "../../components/TextArea"

type WorkProps = {
    values: any;
    setFieldValue: any;
    }
    

const Work: FC <WorkProps> = ({ values, setFieldValue}) => {
  return (
    <>
      <Heading textAlign="left" m={0}>
        Situación de empleo
      </Heading>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
          <Select name="type-work" id="typeWork">
            <option value="siMismo">Por si mismo</option>
            <option value="otros">Otros</option>
          </Select>
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Nombre del empleador actual" />
        </Flex>
      </Flex>
      <Flex>
        <Input type="text" label="Ocupación" />
        <Input type="text" label="Dirección del empleador actual" />
      </Flex>
      <Flex>
        <Input type="text" label="Ciudad" />
        <Input type="text" label="Estado" />
      </Flex>
      <Flex>
        <Input type="text" label="Código postal" />
        <Input label="Años" />
        <Input label="Meses" />
      </Flex>
      <Flex>
        <Input type="tel" label="Teléfono del trabajo" />
        <Input label="Ingresos mensuales ($)" />
      </Flex>
    </>
  )
}

export default Work
