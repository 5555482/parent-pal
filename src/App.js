import React from "react";
import Button from "./Button";
import { CiAlignLeft, CiDumbbell, CiLineHeight } from "react-icons/ci";

function App() {
  return (
    <div>
      <div>
        <Button success rounded>
          <CiAlignLeft />
          Click here
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          <CiDumbbell />
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
          <CiLineHeight />
          Hi
        </Button>
      </div>
    </div>
  );
}

export default App;
