import staticData from "../../staticData/staticData";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

function ServiceItems() {
  return (
    <div className="px-4 py-2 bg-[#e8f7fb]">
      {staticData.map(({ logo, title, content, id }) => (
        <Item
          key={uuidv4()}
          logo={logo}
          title={title}
          content={content}
          id={id}
        />
      ))}
    </div>
  );
}

export default ServiceItems;
