"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();
  // console.log(userData);
  const user = userData.data?.user
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  }
  
  

  return (
    <div className="border-b px-2 bg-white">
      <nav className=" flex justify-between items-center  py-2 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl text-[#183f2d]">QurbaniHat </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li className="font-bold ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-bold ">
            <Link href={"/all-animals"}>All Animals</Link>
          </li>
          <li className="font-bold ">
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4 ">
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