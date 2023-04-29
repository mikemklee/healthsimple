import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import HeaderBar from "../components/HeaderBar";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="w-full h-full flex-1">
      {!session ? (
        <div className="max-w-[20rem] mx-auto mt-60">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["google"]}
          />
        </div>
      ) : (
        <div>
          <HeaderBar session={session} />
        </div>
      )}
    </div>
  );
};

export default Home;
