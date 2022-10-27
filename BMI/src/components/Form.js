import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not a valid input");
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
      setHeight("");
      setWeight("");
    }
  };
  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-success h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3 text-center">
              <label className="form-label ">Weight(kg) :</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3 text-center">
              <label className="form-label">Height(m) :</label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-center">
        <input type="submit" className="btn btn-success btn-md my-3 " value="Get BMI" />
        </div>
      </form>
      {alert && (
        <div className="alert alert-danger" role="alert">
          Please enter valid Entries!
        </div>
      )}
    </div>
  );
}

export default Form;