import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.componenet";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am the sign in page!</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
