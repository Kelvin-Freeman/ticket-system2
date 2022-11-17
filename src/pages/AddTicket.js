import React, {useState,useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { PageBreadcrumb } from '../../src/components/breadcrumb/Breadcrumb'
import { AddTicketForm } from '../components/add-ticket-form/AddTicketForm'

import { shortText } from '../utilities/validation'

const initialFrmDt = {
    subject: '',
    issueDate: '',
    detail: '',
}

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
}
export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt)
    const [frmDataError, setFrmDataError] = useState(initialFrmError)

    useEffect(() => {}, [frmData, frmDataError])

    const handleOnChange = e =>{
        const {name, value} = e.target;

       

            // This creates our state. The three dots represent a spread operator
        setFrmData({
         ...frmData, 
         [name]: value, 
        })
       
    }

    const handleOnSubmit = async e =>{
        e.preventDefault()

        setFrmDataError(initialFrmError)
        const isSubjectValid = await shortText(frmData.subject)

      
        setFrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        })

        console.log('Form submission received', frmData)
    }

    

    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                <AddTicketForm  handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit} 
                frmDt={frmData} 
                frmDataError={frmDataError} />
                </Col>
            </Row>
        </Container>
    )
}