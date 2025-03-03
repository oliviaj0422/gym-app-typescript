type Props = {
  title: string;
  items: string[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const FooterMenuButton = ({ title, items, isOpen, setIsOpen }: Props) => {
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
