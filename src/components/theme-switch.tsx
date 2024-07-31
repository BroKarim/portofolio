import { useTheme } from "next-themes";
import { useMounted } from "@/lib/hooks/useMounted";
import { Moon, SunDim } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

export function ThemeSwitch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  const isDarkMode = theme === "dark";
  // const flipTheme = (): void => setTheme(isDarkMode ? "light" : "dark");
  const flipTheme = (): void => {
    const newTheme = isDarkMode ? "light" : "dark";
    console.log(`Current theme: ${theme}, Switching to: ${newTheme}`);
    setTheme(newTheme);
  };
  return (
    <div className="px-2 border rounded-md border-gray-700 bg-[#09090b] py-2">
      <button
        onClick={flipTheme}
        className="flex items-center justify-center gap-2 text-xs font-medium rounded-md"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {isDarkMode ? (
            <motion.i {...moonVariants} key="dark">
              <Moon size={20} color={"#bd4242"} />
            </motion.i>
          ) : (
            <motion.i {...sunVariants} key="light">
              <SunDim size={20} color={"#bd4242"} />
            </motion.i>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

// <Moon size={20} color={"#bd4242"} />
const variants: MotionProps[] = [
  {
    initial: { x: "50px", y: "25px" },
    animate: { scale: 1, x: 0, y: 0, transition: { duration: 0.8 } },
    exit: { x: "50px", y: "25px", transition: { duration: 0.5 } }
  },
  {
    initial: { x: "-50px", y: "25px" },
    animate: { scale: 1, x: 0, y: 0, transition: { duration: 0.8 } },
    exit: { x: "-50px", y: "25px", transition: { duration: 0.5 } }
  }
];

const [moonVariants, sunVariants] = variants;
