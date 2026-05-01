'use client'

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="min-h-screen p-4">
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-10 p-8 shadow-md">
        <Avatar className="w-24 h-24 mb-4">
          <Avatar.Image
            alt={user?.name || "User"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-2xl">
            {user?.name?.charAt(0) || "U"}
          </Avatar.Fallback>
        </Avatar>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2> 
          <p className="text-gray-500 font-medium">{user?.email}</p>
        </div>

        <UpdateUserModal />
      </Card>
      
      
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ProfilePage;