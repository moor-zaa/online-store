// Components
import Container from "../container";
import Logo from "./logo";
import HeaderMenu from "./header-menu";
import SearchBar from "./search-bar";
import FavouriteButton from "./favourite-button";
import CartIcon from "./cart-icon";
import SigninButton from "./signin-button";
import MobileMenu from "./mobile-menu";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="max-w-full flex items-center justify-between text-light-color">
        {/* Logo */}
        <div className="flex items-center gap-2.5 w-auto md:w-1/3 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />

        {/* NavButton */}

        {/* NavAdmin */}
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
          <SigninButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
