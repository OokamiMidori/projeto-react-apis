import gotcha from "../../assets/Frame 15gotcha.svg"
import ohnoh from "../../assets/Frame 16ohno.svg"
import { GlobalContext } from "../../contexts/GlobalContexts";
import { ModalContainer } from "./Modal.styled";
import React, { useContext } from 'react'

const Modal = () => {
    
    const context = useContext(GlobalContext)
    const {secondModal, setModal} = context

function closeModal() {
    setModal(false)
}

    return (
    <ModalContainer onClick={()=>closeModal()}>
       
            {secondModal? <img src={ohnoh}/>:<img src={gotcha}/>}
       
    </ModalContainer>
  )
}

export default Modal