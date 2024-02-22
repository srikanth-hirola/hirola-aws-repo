import React, { useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import Header from '../Constants/header';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { clientsNavData } from './clientsNavData'
import { FormInputsClients } from './FormInputsClients';


export const AddClients = () => {
    const { handleSubmit } = useApiCalls();

    const [client, setClient] = useState({
        clientName: "",
        Dimage: '',
    })

    return (
        <>
            <Header navData={clientsNavData} />
            <Container >
                <div>
                    <Form>
                        <FormInputsClients client={client} setClient={setClient} />
                        <Button
                            variant="outline-primary"
                            className="update_button"
                            type="submit"
                            name="sub"
                            onClick={(e) => handleSubmit(e, client, 'admin/clients/compose', '/admin/clients', "Added Client Successfully!")}
                        >
                            Add Client
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}
