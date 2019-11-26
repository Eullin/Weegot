import React, { FC } from 'react'
import { Background } from './hero.styles'


const Hero: FC = ({children}) => {
return <Background>{children}</Background>
}

export default Hero
