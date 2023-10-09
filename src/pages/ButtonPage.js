import React from "react";
import Button from "../components/Button";
import { CiAlignLeft, CiDumbbell, CiLineHeight } from "react-icons/ci";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded className="mb-5">
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

export default ButtonPage;
