import React, { useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import Header from '../Constants/header';
import Container from 'react-bootstrap/esm/Container';
import { FormInputsNews } from './FormInputsNews';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { newsNavData } from './newsNavData';


export const AddNews = () => {
    const { handleSubmit } = useApiCalls();

    const [news, setNews] = useState({
        title: "",
        Dimage: '',
        description: '',
        link: '',
    })

    return (
        <>
            <Header navData={newsNavData} />
            <Container >
                <div>
                    <Form>
                        <FormInputsNews news={news} setNews={setNews} />
                        <Button
                            variant="outline-primary"
                            className="update_button"
                            type="submit"
                            name="sub"
                            onClick={(e) => handleSubmit(e, news, 'admin/news/compose', '/admin/news', "Added News Successfully!")}
                        >
                            Add News
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}
