import React from "react"
import Paragraph from "../../components/Paragraph"
import MainBox from "../../components/MainBox"

const AboutUs = () => (
  <MainBox >
    <Paragraph fontSize={7} lineHeight="normalText" paddingY={[3, 4]} textAlign="center">
      Somos expertos al momento de negociar la compra y venta de automóviles.​ <br />
      Evita ser engañado por concesionarios sin principios que, con el objetivo
      de lograr una venta, implementan estrategias maliciosas que afectan tu
      pago inicial, tus cuotas y hasta tu situación crediticia. <br /> Te garantizamos
      el mejor negocio posible según tu situación.
    </Paragraph>
  </MainBox>
)

export default AboutUs
