import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "../types/supabase";
import Avatar from "./Avatar";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function HeaderBar({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();

  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  }

  return (
    <div className="flex items-center">
      <Avatar url={avatar_url} size={50} />

      <button className="button block" onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
    </div>
  );
}
