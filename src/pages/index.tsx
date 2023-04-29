import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import HeaderBar from "../components/HeaderBar";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();

  return (
    <div className="w-full h-full flex-1">
      {!session ? (
        <div className="max-w-[20rem] mx-auto mt-60">
          <div className="text-center font-semibold text-xl ">Healthsimple</div>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
            }}
            providers={["google"]}
          />
        </div>
      ) : (
        <div>
          <HeaderBar session={session} user={user} />
        </div>
      )}
    </div>
  );
};

export default Home;
