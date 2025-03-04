import { useState } from "react";

type Props = {
  title: string;
  items: string[];
};

const FooterMenuButton = ({ title, items }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsOpen(!isOpen)} className="font-bold">
        {title}
      </button>
      {isOpen && (
        <div className="mt-3 flex flex-col items-center gap-2 text-sm">
          {items.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterMenuButton;
