"use client";
import { authClient } from "@/lib/auth-client";
import { Check, CheckDouble, TriangleExclamation } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image,
      password
    });

    if (error) {
      setErrorMessage(error.message || "Something went wrong!");
      return;
    }

    if (!error) {
     
      setIsSuccess(true);
      e.target.reset();      
  
        router.push('/');
    
    }
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5 shadow-lg">
      <h1 className="text-center text-2xl font-bold mb-6">Register</h1>

      
      {isSuccess && (
        <div className="w-96 mx-auto bg-green-100 text-green-700 p-4 rounded-lg mb-5 text-sm font-bold border border-green-200">
          <CheckDouble></CheckDouble> Account Created Successfully!
        </div>
      )}

      {errorMessage && (
        <div className="w-96 mx-auto bg-red-100 text-red-700 p-4 rounded-lg mb-5 text-sm font-bold border border-red-200">
          <TriangleExclamation></TriangleExclamation> {errorMessage}
        </div>
      )}

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" variant="bordered" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" variant="bordered" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" variant="bordered" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
            if (!/[0-9]/.test(value)) return "Password must contain at least one number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" variant="bordered" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2 mt-2">
          <Button type="submit" color="primary" className="flex-1 font-bold">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="flat" color="danger">
            Reset
          </Button>
        </div>
      </Form>

      <div className="w-96 mx-auto mt-6">
        <div className="flex items-center gap-4 mb-6">
          <div className=" bg-gray-200 flex-1"></div>
          <p className="text-gray-400 text-sm font-medium">Or</p>
          <div className=" bg-gray-200 flex-1"></div>
        </div>
        
        <Button 
          onClick={handleGoogleRegister} 
          className="w-full bg-white border-2 text-gray-700 font-bold"
          variant="bordered"
        >
          <FaGoogle /> Login With Google
        </Button>
      </div>
    </Card>
  );
}