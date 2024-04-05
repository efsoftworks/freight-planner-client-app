import React from "react"
import Image from 'next/image';
import checkbox from '../../../../public/icons/modes.svg';

interface IModesButton {
    open:() => void;
}

const ModesButtonComponent = (props:IModesButton) => {
    return(
        <Image
            src={checkbox}
            alt='checkbox'
            className='absolute top-0 left-0 m-4 p-2 text-white rounded shadow w-10 h-10 fill-white'
            onClick={() => props.open()}
        />
    )
}

export default ModesButtonComponent;