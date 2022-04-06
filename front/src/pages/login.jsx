import useGoogle from '../hooks/useGoogle';

const Login = () => {
  const { loginUrl } = useGoogle({
    clientId: process.env.REACT_APP_CLIENT_ID,
  })

  return (
    <div>
      <h1>Login</h1>
      
      <a href={loginUrl} >google login</a>
    </div>
  );
}

export default Login;