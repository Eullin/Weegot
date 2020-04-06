import React, { FC, useState } from "react"
import Button from "../../components/Button"
import Heading from "../../components/Heading"
import Flex from "../../components/Flex"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"

type ResidenceProps = {
  values: any
  setFieldValue: any
}

const Residence: FC<ResidenceProps> = ({ values, setFieldValue }) => {
  const [lessThan2, setLessThan2] = useState(true)
  console.log("values", values)
  return (
    <>
      <Heading textAlign="left" m={0}>
        Residencia
      </Heading>
      <Flex display={["row", "column"]}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input label="Dirección" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Ciudad" />
        </Flex>
      </Flex>
      <Flex display={["row", "column"]} mt={3}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input label="Estado" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Código postal" />
        </Flex>
      </Flex>
      <Flex display={["row", "column"]} mt={3}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input label="Tipo de vivienda" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Pago mensual ($)" />
        </Flex>
      </Flex>
      <TextArea p={0}>¿Resides aquí por menos de 2 años?</TextArea>
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
          <TextArea p={0}>Dirección anterior</TextArea>
          <Flex>
            <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
              <Input label="Dirección" />
            </Flex>
            <Flex flexGrow={1} borderBottom="solid 1px">
              <Input label="Ciudad" />
            </Flex>
          </Flex>
          <Flex display={["row", "column"]} mt={3}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input label="Estado" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Código postal" />
        </Flex>
      </Flex>
      <Flex display={["row", "column"]} mt={3}>
        <Flex flexGrow={1} mr={5} borderBottom="solid 1px">
          <Input label="Tipo de vivienda" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Pago mensual ($)" />
        </Flex>
      </Flex>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
          <Input label="Años" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Meses" />
        </Flex>
      </Flex>
        </>
      )}
      <TextArea p={0}>Dirección actual</TextArea>
      <Flex>
        <Flex flexGrow={1} borderBottom="solid 1px" mr={5}>
          <Input label="Años" />
        </Flex>
        <Flex flexGrow={1} borderBottom="solid 1px">
          <Input label="Meses" />
        </Flex>
      </Flex>
    </>
  )
}

export default Residence
