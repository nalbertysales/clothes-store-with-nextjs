import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const list = [
  {
    content: (
      <>
        <div className="flex border rounded-lg">
          <Input className="border-none shadow-none focus-visible:border-none focus-visible:ring-0" />
          <Button
            className="border-none shadow-none"
            variant="outline"
            size="icon"
          >
            <Search />
          </Button>
        </div>
      </>
    ),
  },
  { content: "Shop", className: "hover:bg-slate-300 p-2 rounded-md" },
  { content: "Who we are", className: "hover:bg-slate-300 p-2 rounded-md" },
  { content: "My profile", className: "hover:bg-slate-300 p-2 rounded-md" },
  {
    content: (
      <Button
        className="border-none shadow-none hover:bg-slate-300 w-16 h-12"
        variant="outline"
        size="icon"
      >
        <ShoppingBag />
      </Button>
    ),
  },
];
const Header = () => {
  return (
    <>
      <header className="h-28 w-full flex px-24 items-center gap-2 flex-col justify-center">
        <div className="w-full flex justify-between">
          <img
            src="/Clothes-Store-logo.svg"
            alt="Clothes Store"
            className="max-w-[354px]"
          />

          <ul className="flex gap-14 items-center">
            {list.map((item) => (
              <li className={item.className ? item.className : ""}>
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
