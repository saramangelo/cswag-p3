import { useState } from "react";
import Card from "react-bootstrap/Card";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";

function LoginCard() {
  const [newUser, setNewUser] = useState(false);
  return (
    <Card className="mt-5">
      {newUser ? (
        <SignUpForm setUser={setNewUser} />
      ) : (
        <LoginForm setUser={setNewUser} />
      )}
    </Card>
  );
}

export default LoginCard;
