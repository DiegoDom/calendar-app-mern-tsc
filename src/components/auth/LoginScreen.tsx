import { RegisterForm } from '../forms/RegisterForm';
import { LoginForm } from '../forms/LoginForm';
import './login.css';

export const LoginScreen = () => {
  
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <LoginForm/>
        </div>
        <div className="col-md-6 login-form-2">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
};
