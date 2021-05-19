import React from "react";

import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

// export a modeler page component
// use the Modeler to instantiate a modeler instance
const viewer = new BpmnJS();

export default function ModelerPage(props) {
  React.useEffect(() => {
    // attach it to some element
    viewer.attachTo("#canvas");
  }, []);

  return (
    <div>
      <h1>Modeler</h1>
      <div
        id="canvas"
        style={{
          border: "1px solid #000000",
          height: "90vh",
          width: "100%"
        }}
      ></div>
    </div>
  );
}
