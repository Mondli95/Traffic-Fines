import "./login.scss";

function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <div className="items">
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div className="items">
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <div className="items">
          <button>Login</button>
        </div>
        <div className="items">
          <a href="/register">Don't Have Account? SIGN UP</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
