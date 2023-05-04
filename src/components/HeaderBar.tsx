import { useState, useEffect } from "react";
import { useSupabaseClient, Session, User } from "@supabase/auth-helpers-react";
import { Database } from "../types/supabase";
import Avatar from "./Avatar";
import Link from "next/link";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function HeaderBar({
  session,
  user,
}: {
  session: Session;
  user: User;
}) {
  const supabase = useSupabaseClient<Database>();

  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    getProfile();
  }, [session]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const menu = document.querySelector("#usermenu") as HTMLElement;
      const menuToggle = document.querySelector(
        "#usermenu-toggle"
      ) as HTMLElement;
      const target = event.target as HTMLElement;

      if (menu && !menu.contains(target) && !menuToggle.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  async function getProfile() {
    try {
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select("username, avatar_url")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
        setUsername(user.user_metadata.full_name);
        setUserEmail(user.email || "");
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  return (
    <div className="flex h-14 items-center justify-end border border-b-neutral-200 px-4 relative">
      <Link href="/" className="mr-auto font-semibold text-xl font-['Lexend']">
        Healthsimple
      </Link>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} id="usermenu-toggle">
        <Avatar url={avatar_url} size={32} />
      </button>

      {isMenuOpen && (
        <div
          id="usermenu"
          className="absolute right-4 top-[90%] bg-white border border-neutral-200 rounded-md shadow-lg"
        >
          <div className="px-4 py-2 flex flex-col border-b border-gray-200">
            <span className="font-semibold">{username}</span>
            <span className="text-sm">{userEmail}</span>
          </div>

          <div className="py-1 flex flex-col">
            <button
              onClick={() => supabase.auth.signOut()}
              className="block px-4 py-2 text-gray-700 hover:bg-neutral-100 text-left"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
