import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click here
        </Button>
      </div>
      <div>
        <Button danger outline>
          Hop
        </Button>
      </div>
      <div>
        <Button secondery outline>
          Hide ads
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Hi
        </Button>
      </div>
    </div>
  );
}

export default App;
