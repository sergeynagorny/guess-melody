import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";

const Settings = {
  ERRORS_COUNT: 3
};

const init = () => {
  ReactDOM.render(
      <App
        errorsCount={Settings.ERRORS_COUNT}
      />,
      document.querySelector(`#root`)
  );
};

init();
