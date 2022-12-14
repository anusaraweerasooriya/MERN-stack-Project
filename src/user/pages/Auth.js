import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <form>
      <Input
        id="email"
        element="input"
        type="email"
        label="Email"
        validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid email."
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(7), VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid password."
        onInput={inputHandler}
      />
      <Button type="submit">SIGN IN</Button>
    </form>
  );
};
export default Auth;
