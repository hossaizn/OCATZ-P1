import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { formState: { errors }, handleSubmit, register } = useForm();
  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (formData) => {
    console.log(formData, `event`);
    await AssessmentService.submit(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>Cat Behavioral Instrument</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" {...register(`name`, { required: true })} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="Enter date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPass">
        <Form.Label>Previous Contact with CAT Judicial System</Form.Label>
        {[ `radio` ].map((type) =>
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="YES"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="NO"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPass">
        <Form.Label>Physical Altercations with Other Cats</Form.Label>
        {[ `radio` ].map((type) =>
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="0-3"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="3+"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPass">
        <Form.Label>Physical Altercations With Owner</Form.Label>
        {[ `radio` ].map((type) =>
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="0-10"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="10+"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPass">
        <Form.Label>Plays Well With Dogs</Form.Label>
        {[ `radio` ].map((type) =>
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="YES"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="NO"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPass">
        <Form.Label>Hisses At Strangers</Form.Label>
        {[ `radio` ].map((type) =>
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="YES"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="NO"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>)}
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};
