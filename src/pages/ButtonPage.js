import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click !");
  };

  return (
    <div>
      <div>
        <Button primary outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me !
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoCloudDownload />
          Buy now !
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          See deal !
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide ads !
        </Button>
      </div>
      <div>
        <Button danger>Something</Button>
      </div>
    </div>
  );
}

export default Button;
