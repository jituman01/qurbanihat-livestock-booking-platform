'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Button, Input } from "@heroui/react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.updateUser({
        name: name,
        image: image, 
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
        
        window.location.reload(); 
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 flex flex-col justify-center items-center">
      <Card className="max-w-md w-full border p-8 shadow-lg bg-white rounded-xl">
        
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24 mb-4 border-2 border-green-500">
            <Avatar.Image
              alt={user?.name || "User"}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback className="text-2xl bg-green-100 text-green-800">
              {user?.name?.charAt(0) || "U"}
            </Avatar.Fallback>
          </Avatar>

          <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2> 
          <p className="text-gray-500 font-medium">{user?.email}</p>
        </div>

        <hr className="w-full mb-6 border-gray-200" />

        <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full">
          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Update Name</label>
            <Input 
              isRequired
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Your Name" 
              variant="bordered"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600 block mb-1">Update Image URL</label>
            <Input 
              isRequired
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              placeholder="Image URL" 
              variant="bordered"
            />
          </div>

          <Button 
            type="submit" 
            isLoading={loading}
            className="w-full bg-green-700 text-white font-bold mt-2"
          >
            Save Changes
          </Button>
        </form>
      </Card>
      
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ProfilePage;