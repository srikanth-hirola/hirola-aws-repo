import { Button } from 'bootstrap'
import React from 'react'

export const LoadingBtn = () => {
    return (
        <Button
            variant="outline-primary"
            className="update_button"
            type="submit"
            name="sub"
        >
            Loading...
        </Button>
    )
}
