// components/Navbar.jsx
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          WebCENT
        </Link>

        {/* Menu */}
        <div className="space-x-4 hidden md:flex">
          <Link
            href="/"
            className="hover:text-yellow-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-400 transition duration-200"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-yellow-400 transition duration-200"
          >
            Dashboard
          </Link>

          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
