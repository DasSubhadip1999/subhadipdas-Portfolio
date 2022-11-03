import staticData from "../../staticData/staticData";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

function ServiceItems() {
  return (
    <div>
      {staticData.map(({ logo, title, content }) => (
        <Item key={uuidv4()} logo={logo} title={title} content={content} />
      ))}
    </div>
  );
}

export default ServiceItems;
