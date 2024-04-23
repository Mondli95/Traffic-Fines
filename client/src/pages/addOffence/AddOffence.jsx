import "./addOffence.scss";

function AddOffence() {
  return (
    <div className="offence">
      <div className="left">
        <h3>Offence Details</h3>
        <div className="offence-details">
          <div className="labels">
            <span>Date:</span>
            <span>Time:</span>
            <span>Location:</span>
            <span>Type:</span>
            <span>Speed Travelled:</span>
            <span>Description:</span>
            <span>VIN Number:</span>
          </div>
          <div className="inputs">
            <input type="text" name="date" />
            <input type="text" name="time" />
            <input type="text" name="location" />
            <select name="offence" id="offence">
              <option value="select">-- select --</option>
            </select>
            <input type="number" name="speed" />
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
            <input type="text" name="vin" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="offence-evidence">
          <h3>Evidence</h3>
        </div>
      </div>
    </div>
  );
}

export default AddOffence;
