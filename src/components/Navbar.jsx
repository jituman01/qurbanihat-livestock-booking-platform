"use client";

import { authClient } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!");
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="border-b px-4 bg-white">
      <nav className="flex flex-col md:flex-row justify-between items-center py-2 md:py-4 max-w-7xl mx-auto w-full gap-2 md:gap-4">
        <div className="flex gap-2 items-center">
          <Image
            src={'/logo.png'}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl text-[#2d6b50]">QurbaniHat</h3>
        </div>

        <ul className="hidden md:flex items-center gap-4 md:gap-8 text-sm md:text-base">
          <li
            className={`font-bold  ${
              pathname === '/'
                ? 'text-green-700 border-b-2 border-b-green-700'
                : 'hover:text-green-700 '
            }`}
          >
            <Link href={'/'}>Home</Link>
          </li>
          <li
            className={`font-bold  ${
              pathname === '/all-animals'
                ? 'text-green-700 border-b-2 border-b-green-700'
                : 'hover:text-green-700'
            }`}
          >
            <Link href={'/all-animals'}>All Animals</Link>
          </li>
          <li
            className={`font-bold  ${
              pathname === '/profile'
                ? 'text-green-700 border-b-2 border-b-green-700'
                : 'hover:text-green-700'
            }`}
          >
            <Link href={'/profile'}>Profile</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!user && (
            <ul className="flex items-center  text-sm gap-2">
              {/* dropdown menu */}
              <div className="md:hidden lg:hidden">
                <Dropdown>
                  <Button aria-label="Menu" variant="secondary">
                    <Bars></Bars>
                  </Button>
                  <Dropdown.Popover>
                    <Dropdown.Menu onAction={key => router.push(key)}>
                      <Dropdown.Item id="/" textValue="Home">
                        <Label className="">Home</Label>
                      </Dropdown.Item>
                      <Dropdown.Item id="/all-animals" textValue="All Animals">
                        <Label>All Animals</Label>
                      </Dropdown.Item>
                      <Dropdown.Item id="/profile" textValue="Profile">
                        <Label>Profile</Label>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </div>

              <li
                className={`font-bold  ${
                  pathname === '/register'
                    ? 'text-blue-500 border-b-2 border-b-blue-500'
                    : 'hover:text-blue-500'
                }`}
              >
                <Link href={'/register'}>Register</Link>
              </li>
              <li className="font-bold text-white ">
                <Button>
                  <Link href={'/login'}>Login</Link>
                </Button>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogOut} size="sm" variant="danger">
                LogOut
              </Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;