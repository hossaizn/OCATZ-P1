import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { handleSubmit, register } = useForm();
  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API
  const onSubmit = async (formData) => {
    await AssessmentService.submit(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Label>Cat Behavioral Instrument</Form.Label>
      <div>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter Name" {...register(`name`, { required: true })} />
        </Form.Group>
      </div>

      <div>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter date" {...register(`date`, { required: true })} />
        </Form.Group>
      </div>

      <div>
        <Form.Group className="mb-3" controlId="formBasicPass1">
          <Form.Label>Previous Contact with CAT Judicial System</Form.Label>
          {[ `radio` ].map((type) =>
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="YES"
                value="1"
                {...register(`group1`, { required: true })}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="NO"
                value="0"
                {...register(`group1`, { required: true })}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>)}
        </Form.Group>
      </div>

      <div>
        <Form.Group className="mb-3" controlId="formBasicPass2">
          <Form.Label>Physical Altercations with Other Cats</Form.Label>
          {[ `radio` ].map((type) =>
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="0-3"
                value="0"
                {...register(`group2`, { required: true })}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="3+"
                value="1"
                {...register(`group2`, { required: true })}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>)}
        </Form.Group>
      </div>

      <div>
        <Form.Group className="mb-3" controlId="formBasicPass3">
          <Form.Label>Physical Altercations With Owner</Form.Label>
          {[ `radio` ].map((type) =>
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="0-10"
                value="0"
                {...register(`group3`, { required: true })}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="10+"
                value="1"
                {...register(`group3`, { required: true })}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>)}
        </Form.Group>
      </div>

      <div>
        <Form.Group className="mb-3" controlId="formBasicPass4">
          <Form.Label>Plays Well With Dogs</Form.Label>
          {[ `radio` ].map((type) =>
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="YES"
                value="0"
                {...register(`group4`, { required: true })}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="NO"
                value="1"
                {...register(`group4`, { required: true })}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>)}
        </Form.Group>
      </div>

      <div>
        <Form.Group className="mb-3" controlId="formBasicPass5">
          <Form.Label>Hisses At Strangers</Form.Label>
          {[ `radio` ].map((type) =>
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="YES"
                value="1"
                {...register(`group5`, { required: true })}
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="NO"
                value="0"
                {...register(`group5`, { required: true })}
                type={type}
                id={`inline-${type}-2`}
              />
            </div>)}
        </Form.Group>
      </div>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};
