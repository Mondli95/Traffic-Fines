import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="user-details">
        <h3>User Details</h3>
        <div className="content">
          <div className="labels">
            <span>Firstname:</span>
            <span>Lastname:</span>
            <span>Email:</span>
            <span>ID Number:</span>
            <span>Cell No:</span>
            <span>Password:</span>
            <span>Confirm Password:</span>
            <span>Role:</span>
          </div>
          <div className="inputs">
            <input type="text" name="firstname" />
            <input type="text" name="lastname" />
            <input type="email" name="email" />
            <input type="number" name="idnumber" />
            <input type="number" name="cellnumber" />
            <input type="password" name="password" />
            <input type="password" name="confirmPassword" />
            <select name="role" id="role">
              <option value="select">--select--</option>
            </select>
          </div>
        </div>
      </div>

      <div className="address">
        <div className="top">
          <h3>Address</h3>
          <div className="content">
            <div className="labels">
              <span>Building:</span>
              <span>Street No:</span>
              <span>Street Name:</span>
              <span>Postal Code:</span>
            </div>
            <div className="inputs">
              <input type="text" name="firstname" />
              <input type="text" name="lastname" />
              <input type="email" name="email" />
              <input type="number" name="idnumber" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="btns">
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
