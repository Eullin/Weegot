import styled from 'styled-components'
import { background, BackgroundProps } from 'styled-system'
import * as Dot from '../images/circle.svg'


export const Circle = styled(Dot)<BackgroundProps>`
${background};
`
