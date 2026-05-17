"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit, FaUser } from "react-icons/fa";
import toast from "react-hot-toast"; 

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const image = e.target.image.value.trim();

    const updateData = {};
    if (name) updateData.name = name;
    if (image) updateData.image = image;

    if (Object.keys(updateData).length === 0) {
      toast.error("Please fill at least one field to update!");
      return;
    }

    const { data, error } = await authClient.updateUser(updateData);

    if (error) {
      toast.error(error.message || "Update failed!");
    } else {
      toast.success("Profile updated successfully!");
      
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <Modal>
      <Button variant="secondary">
        <FaEdit /> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close" className="bg-green-700 text-white font-bold">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}