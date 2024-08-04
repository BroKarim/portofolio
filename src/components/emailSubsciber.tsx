'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "./ui/use-toast";

const EmailSubscribe = () => {
    const { toast } = useToast();
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      toast({
        title: "Something went wrong.",
        description: "The subscription did not happen. Please try again."
      });
    } else {
      toast({
        title: "🎉 Nice!",
        description: "You'll get the emails now."
      });
      // Di sini Anda bisa menambahkan logika untuk mengirim email ke backend
      setEmail(""); // Reset input setelah berhasil
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center  space-x-2"
    >
      <Input
        type="email"
        id="email-input"
        name="email"
        placeholder="Your email..."
        className="text-black border-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        className="text-black bg-white border hover:bg-white border-black hover:shadow-[6px_4px_0px_rgba(0,0,0,1)] dark:shadow-none"
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
};


export default EmailSubscribe