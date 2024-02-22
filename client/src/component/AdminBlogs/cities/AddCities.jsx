import React, { useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import Header from '../Constants/header';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { citiesNavData } from './citiesNavData'
import { FormInputsCities } from './FormInputsCities';


export const AddCities = () => {
    const { handleSubmit } = useApiCalls();

    const [city, setCity] = useState({
        cityName: "",
        Dimage: '',
        Address: '',
    })

    return (
        <>
            <Header navData={citiesNavData} />
            <Container >
                <div>
                    <Form>
                        <FormInputsCities city={city} setCity={setCity} />
                        <Button
                            variant="outline-primary"
                            className="update_button"
                            type="submit"
                            name="sub"
                            onClick={(e) => handleSubmit(e, city, 'admin/cities/compose', '/admin/cities', "Added City Successfully!")}
                        >
                            Add City
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}
