import React, { useState } from "react";
function UserForm() {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    city: "",
  };

  //proceed to next step:
  nextStep = () => {
    const { step, setStep } = useState();
    setState({
      step: step + 1,
    });
  };

  //go back to previous step
  prevStep = () => {
    const { step, setStep } = useState();
    setState({
      step: step - 1,
    });
  };

  //handle field changes
  handleChange = (input) => (e) => {
    setState({ [input]: e.target.value });
  };

  return <></>;
}

export default UserForm;
