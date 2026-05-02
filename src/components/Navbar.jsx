"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!");
          router.push("/signin");
        },
      },
    });
  };

  return (
    <div className="border-b px-4 bg-white">
      <nav className="flex flex-col md:flex-row justify-between items-center py-4 max-w-7xl mx-auto w-full gap-4">

        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl text-[#2d6b50]">QurbaniHat</h3>
        </div>

        <ul className="flex items-center gap-4 md:gap-8 text-sm md:text-base">
          <li className="font-bold hover:text-green-700 ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-bold hover:text-green-700 ">
            <Link href={"/all-animals"}>All Animals</Link>
          </li>
          <li className="font-bold hover:text-green-700 ">
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          { !user && <ul className="flex items-center  text-sm gap-2">

            <li className="font-bold ">
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li className="font-bold ">
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>}
          {
           user && <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"/>
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>

              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          }
        </div>

      </nav>
    </div>
  );
};

export default Navbar;