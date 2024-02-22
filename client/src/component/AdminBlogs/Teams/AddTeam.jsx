import React, { useState } from 'react'
import { useApiCalls } from '../../../Hooks/useApiCalls';
import { teamNavData } from './teamNavData';
import Header from '../Constants/header';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { FormInputsTeam } from './FormInputsTeam';

export const AddTeam = () => {
    const { handleSubmit } = useApiCalls();

    const endpoint = 'admin/teamCategory'

    const [team, setTeam] = useState({
        title: "",
        category: '',
        thumb: '',
        designation: '',
        description: '',
    })

    return (
        <>
            <Header navData={teamNavData} />
            <Container >
                <div>
                    <Form>
                        <FormInputsTeam team={team} setTeam={setTeam} endpoint={endpoint} />
                        <Button
                            variant="outline-primary"
                            className="update_button"
                            type="submit"
                            name="sub"
                            onClick={(e) => handleSubmit(e, team, 'admin/team/compose', '/admin/team', "Added Team Member Successfully!")}
                        >
                            Add Team Member
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}
