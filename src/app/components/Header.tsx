import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <>
      <header className="h-28 w-full flex px-24 items-center gap-2 flex-col justify-center">
        <div className="w-full flex justify-between">
          <img src="/Clothes-Store-logo.svg" alt="Clothes Store" />

          <ul className="flex gap-10 items-center">
            <li className="flex border rounded-lg">
              <Input className="border-none shadow-none focus-visible:border-none focus-visible:ring-0" />

              <Button
                className="border-none shadow-none"
                variant="outline"
                size="icon"
              >
                <Search />
              </Button>
            </li>

            <li>Shop</li>

            <li>Who we are</li>

            <li>My profile</li>

            <li>
              <Button
                className="border-none shadow-none hover:bg-slate-300 w-16 h-12"
                variant="outline"
                size="icon"
              >
                <ShoppingBag />
              </Button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
