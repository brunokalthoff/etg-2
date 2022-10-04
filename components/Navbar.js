import Image from "next/image";
import Link from "next/link";
import useDarkMode from "../hooks/useDarkMode";
import bulb from "../public/bulb.svg";
import moon from "../public/moon.svg";
function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav>
      <div className="navigation">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/art">
          <a>Exhibition</a>
        </Link>
        <Link href="/admission">
          <a>Admission</a>
        </Link>
        <Link href="https://enterthegateway.art">
          <a target="_blank" rel="noopener noreferrer">
            ETG Gallery
          </a>
        </Link>

        {colorTheme === "light" ? (
          <Image className="pointer" width="20" src={bulb} onClick={() => setTheme("light")} />
        ) : (
          <Image width={25} src={moon} onClick={() => setTheme("dark")} />
        )}
      </div>
    </nav>
  );
}
export default Navbar;
