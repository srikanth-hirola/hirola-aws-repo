import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Header from '../Constants/header';
import { portfolioNavData } from './portfolioNavData';
import { useApiCalls } from '../../../Hooks/useApiCalls';
import Button from 'react-bootstrap/esm/Button';
import { FormInputsPortfolio } from './FormInputsPortfolio';

export const AddPortfolio = () => {
    const { handleSubmit } = useApiCalls();

    const endpoint = 'admin/portfolioCategory'

    const [portfolio, setPortfolio] = useState({
        title: "",
        category: [],
        thumb: '',
        excerpt: '',
        body: ['']
    })

    return (
        <>
            <Header navData={portfolioNavData} />
            <Container >
                <div>
                    <Form>
                        <FormInputsPortfolio portfolio={portfolio} setPortfolio={setPortfolio} endpoint={endpoint} />
                        <Button
                            variant="outline-primary"
                            className="update_button"
                            type="submit"
                            name="sub"
                            onClick={(e) => handleSubmit(e, portfolio, 'admin/portfolio/compose', '/admin/portfolio', "Added Portfolio Successfully!")}
                        >
                            Add Portfolio
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}
