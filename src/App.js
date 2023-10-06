import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded>
          Click here
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Hop
        </Button>
      </div>
      <div>
        <Button outline secondary>
          Hide ads
        </Button>
      </div>
      <div>
        <Button rounded warning outline>
          Hi
        </Button>
      </div>
    </div>
  );
}

export default App;
