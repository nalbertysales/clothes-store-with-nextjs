import { Search, ShoppingBag, UserRound } from "lucide-react";
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
  { content: "Shop", className: "hover:bg-slate-200 p-2 rounded-md" },
  { content: "Contact", className: "hover:bg-slate-200 p-2 rounded-md" },

  {
    content: (
      <Button
        className="border-none shadow-none hover:bg-slate-200 w-14 h-10"
        variant="outline"
        size="icon"
      >
        <ShoppingBag />
      </Button>
    ),
  },
  {
    content: (
      <Button
        className="border-black rounded-full hover:bg-slate-200 w-10 h-10"
        variant="outline"
        size="icon"
      >
        <UserRound />
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

          <ul className="flex gap-5 items-center">
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
