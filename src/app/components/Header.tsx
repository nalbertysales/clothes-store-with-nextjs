import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <>
      <header className="h-28 w-full flex justify-between px-24 items-center gap-12">
        <div>
          <img src="/Clothes-Store-logo.svg" alt="Clothes Store" />
        </div>

        <ul className="flex gap-12 items-center">
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
            <button className="bg-emerald-300 px-8 py-3 rounded-lg">
              <img src="/cart.svg" alt="Cart" />
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
