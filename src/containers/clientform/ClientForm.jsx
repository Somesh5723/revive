import React, { useState } from 'react';
import './clientform.css';

const ClientForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <form id="msform" onSubmit={handleSubmit}>
          <ul id="progressbar">
            <li className={currentStep === 1 ? "active" : ""}>Personal Details</li>
            <li className={currentStep === 2 ? "active" : ""}>Task Details</li>
            <li className={currentStep === 3 ? "active" : ""}>Finish Setup</li>
          </ul>
          <fieldset style={{ display: currentStep === 1 ? "block" : "none" }}>
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">Tell us something more about you</h3>
            {/* Input fields for Personal Details */}
            <input type="text" name="fname" placeholder="Full Name" />
            <input type="text" name="lname" placeholder="Location" />
            <input type="text" name="phone" placeholder="Phone" />
            <input type="button" name="next" className="next action-button" onClick={nextStep} value="Next" />
          </fieldset>
          <fieldset style={{ display: currentStep === 2 ? "block" : "none" }}>
            <h2 className="fs-title">Task Details</h2>
            <h3 className="fs-subtitle">These details will be visible to freelancers</h3>
            {/* Input fields for Social Profiles */}
            <input type="text" name="tname" placeholder="Task Name" />
            <input type="text" name="budget" placeholder="Your Budget" />
            <input type="text" name="duration" placeholder="Maximum Time Duration(in days)" />
            <input type="text" name="desc" placeholder="Description" />
            <input type="button" name="previous" className="previous action-button-previous" onClick={prevStep} value="Previous" />
            <input type="button" name="next" className="next action-button" onClick={nextStep} value="Next" />
          </fieldset>
          <fieldset style={{ display: currentStep === 3 ? "block" : "none" }}>
            <h2 className="fs-title">Finish Setup</h2>
            <h3 className="fs-subtitle">Provide some confirmation</h3>
            {/* Input fields for Account Setup */}
            <input type="text" name="skills" placeholder="Freelancer must have skills" />
            <input type="text" name="learning" placeholder="Want To Learn the skill from the freelancer" />
           
            <input type="button" name="previous" className="previous action-button-previous" onClick={prevStep} value="Previous" />
            <input type="submit" name="submit" className="submit action-button" value="Submit" />
          </fieldset>
        </form>
        
      </div>
    </div>
  );
};

export default ClientForm;
