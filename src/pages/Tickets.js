import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../components/breadcrumb/Breadcrumb'
import tickets from '../data/dummy-tickets.json'
import { MessageHistory } from '../message-history/MessageHistory'
import { UpdateTicket } from '../update-ticket/UpdateTicket'
import { useParams } from 'react-router-dom'
// import { array } from 'prop-types'

// const ticket = tickets[0]

const Ticket = () => {
    const {tId} = useParams()
    const [message, setMessage] = useState('')
    const [ticket, setTicket] = useState('')

    useEffect(() => {for (let i = 0; i < tickets.length; i++) {
        if(tickets[i].id == tId){
            setTicket(tickets[i])
            continue
        }
    }}, [message, tId])

    const handleOnChange = e => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = () => {
        alert('Form Submitted')
    }
    return(
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page='Ticket' />
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                    <div className='subject'>Subject: {ticket.subject}</div>
                    <div className='date'>Ticket Opened On: {ticket.addedAt}</div>
                    <div className='status'>Status: {ticket.status}</div>
                </Col>
                <Col className='text-end'>
                    <Button variant='outline-danger'>Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    {ticket.history && <MessageHistory msg={ticket.history}/>}
                </Col>
            </Row>
            <hr />

            <Row className='mt-4'>
                <Col>
                    <UpdateTicket msg={message} 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket