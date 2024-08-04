import Image from "next/image";
// import Profile from "../../public/assets/profile.png";
import NotionProfile from "../../public/assets/notion-profile-border.png";
import NotionProfileDark from "../../public/assets/notion-profile-white.png";
import { useTheme } from "next-themes";

interface Props {
  theme?: string;
}

const BroKariim = ({ theme }: Props) => (
  <Image
    className="h-48 w-48 rounded-full dark:border-gray-800  my-4"
    // src={NotionProfile}
    src={theme === "dark" ? NotionProfileDark : NotionProfile}
    alt=""
  />
);

export const ProfileImage = () => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-start items-start w-full">
      <BroKariim theme={theme} />
    </div>
  );
};
