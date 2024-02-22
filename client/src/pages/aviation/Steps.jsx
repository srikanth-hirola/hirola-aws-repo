import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Planning',
    description: `At Hirola InfoTech Solutions, we begin by meticulously planning the inflight advertising campaign. This involves identifying the most suitable flights, routes, and types of inflight advertising based on the brand's campaign objectives and budget. Our goal is to optimize the utilization of the budget while maximizing campaign effectiveness.`,
  },
  {
    label: 'Execution',
    description:
      'Once the media plan is approved, our dedicated team proceeds with the printing, fabrication, and placement of the chosen media. We ensure that the campaign materials are prepared to the highest standards and are ready for display in the designated inflight advertising spaces.',
  },
  {
    label: 'Monitoring',
    description: `Continuous monitoring is a crucial aspect of our inflight advertising services. We provide clients with real-time updates and geo-tagged images of the campaign's progress, including details of the flight names and routes. This ensures transparency and allows clients to assess the impact of their campaign. Upon the campaign's conclusion, we conduct a final review and provide additional evidence of the campaign's success. If an extension is required, we discuss options with the client to accommodate their needs.`,
  },
];

export default function AviationSteps() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 900 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              className='mb-3'
            >
              <h3 className='mb-0' >{step.label}</h3>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next '}
                  </Button>
                  <Button
                  variant='outlined'
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Check It Again
          </Button>
       
      )}
    </Box>
  );
}
