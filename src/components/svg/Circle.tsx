import React, { FC } from "react"
import styled from 'styled-components'
import dot from '../../images/test.svg'
import { space, SpaceProps } from 'styled-system';

const Circle = styled.div<SpaceProps>`
${space}
background-image: url(${dot});
background-repeat: no-repeat;
background-size: 100px;
width: 100px;
`

export default Circle
 