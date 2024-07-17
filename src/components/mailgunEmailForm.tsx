import { useState, FormEvent, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function MailgunEmailForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      fetch('/api/addSubscription', {
        method : "POST",
        body: JSON.stringify({
          email: email
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
        });

    }catch{
      console.log("something went wrong")
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center  space-x-2"
      >
        <Input
          type="email"
          id="email-input"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email..."
          className="text-black"
        />
        <Button className="text-black bg-white" type="submit">
          Subscribe
        </Button>
        {message && <p>{message}</p>}
      </form>
    </>
  );
}
