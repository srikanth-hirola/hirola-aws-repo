import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import CounterUp from '../../component/counterup/CounterUp';


const CounterUpOne = () => {
    return (
        <div className="section  bg-color-light">
            <div className="container">
            <SectionTitle 
                    subtitle="Our Success Story"
                    title="Design startup movement"
                    description="Hirola InfoTech Solutions is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients."
                    textAlignment="heading-light text-white"
                    textColor=""
                />
                <div className="row">
                    <CounterUp colSize="col-lg-3 col-6" layoutStyle="" evenTopMargin="" />
                </div>
            </div>
        </div>
    )
}


export default CounterUpOne;