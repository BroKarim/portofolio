"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animation";

interface Props {
  href: string;
  label: string;
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };
  return (
    <button
      className="text-sm font-medium py-2 px-4 rounded-md hover:bg-slate-200 hover:text-black dark:hover:bg-zinc-600"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
