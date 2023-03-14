import SignUpForm from "../../components/sign-up-form/sign-up-form.componenet";
import SignInForm from "../../components/sign-in-form/sign-in-form.componenet";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
