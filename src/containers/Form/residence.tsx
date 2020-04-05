import React, { FC } from 'react'
import Button from '../../components/Button'
import {FormBox} from './form.styles'

type ResidenceProps = {
    onClick: () => void
}

const Residence: FC<ResidenceProps> = ({ onClick }) => {
    return (
        <FormBox>
            Residence
            <Button onClick={onClick}>Next</Button>   
        </FormBox>
    )
}

export default Residence
