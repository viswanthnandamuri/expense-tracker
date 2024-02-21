import React, { useState } from "react";

const Button = () => {
  const [alertStatus, setAlertStatus] = useState(-1);
  return (
    <>
      {alertStatus === -1 ? (
        <button
          type="button"
          className={"btn btn-primary"}
          onClick={() => setAlertStatus(-alertStatus)}
        >
          Button
        </button>
      ) : (
        <>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setAlertStatus(-1);
              }}
            ></button>
          </div>
          <button
            type="button"
            className={"btn btn-primary"}
            onClick={() => setAlertStatus(-alertStatus)}
          >
            Button
          </button>
        </>
      )}
    </>
  );
};

export default Button;
