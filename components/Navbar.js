import Link from "next/link";
function Navbar() {
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
        <Link
          href="https://enterthegateway.art"
        >
          <a>ETG Gallery</a>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
