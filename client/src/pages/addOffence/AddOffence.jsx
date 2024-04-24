import Evidence from "../../components/evidence/Evidence";
import "./addOffence.scss";
import { offenceType } from "../../lib/mockData";

function AddOffence() {
  return (
    <div className="offence">
      <div className="left">
        <h3>Offence Details</h3>
        <div className="offence-details">
          <div className="inputs">
            <span>Date:</span>
            <input type="date" name="date" />
          </div>
          <div className="inputs">
            <span>Time:</span>
            <input type="time" name="time" />
          </div>
          <div className="inputs">
            <span>Location:</span>
            <input type="text" name="location" />
          </div>
          <div className="inputs">
            <span>Type:</span>
            <select name="offence" id="offence">
              <option value="select">-- Select --</option>
              {offenceType.map((type) => (
                <option value={type.type} key={type.id}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>
          <div className="inputs">
            <span>Speed Travelled:</span>
            <input type="number" name="speed" />
          </div>
          <div className="inputs">
            <span>Description:</span>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div className="inputs">
            <span>VIN Number:</span>
            <input type="text" name="vin" />
          </div>
        </div>
      </div>
      <div className="right">
        <h3>Evidence</h3>
        <div className="offence-attachments">
          <div className="selectImg">
            <input type="file" name="file" hidden="true" />
            <label htmlFor="file">Select File for Evidence</label>
          </div>
          <Evidence />
        </div>
      </div>
    </div>
  );
}

export default AddOffence;
