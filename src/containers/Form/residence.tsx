import React, { FC, useState } from "react"
import Button from "../../components/Button"
import { FormBox } from "./form.styles"
import Heading from "../../components/Heading"
import Flex from "../../components/Flex"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"

type ResidenceProps = {
  onClick: () => void
}

const Residence: FC<ResidenceProps> = ({ onClick }) => {
  const [lessThan2, setLessThan2] = useState(false)

  return (
    <FormBox>
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
          <Input type="checkbox"  />
          <span>Si</span>
        </Flex>
        <Flex>
        <Input type="checkbox"  />
          <span>No</span>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" mt={4}>
        <Button onClick={onClick}>Next</Button>
      </Flex>
    </FormBox>
  )
}

export default Residence
