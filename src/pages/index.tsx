import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import HeaderBar from "../components/HeaderBar";
import ExerciseCardList from "@/components/ExerciseCardList";

import "@fontsource/lexend";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();

  const authorized = session && user;

  return (
    <div className="w-full h-full flex-1">
      {!authorized ? (
        <div className="max-w-[20rem] mx-auto mt-60">
          <div className="text-center mb-6 font-semibold text-2xl font-['Lexend']">
            Healthsimple
          </div>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    // brand: "#3498DB",
                    // brandAccent: "#2E86C1",
                    // brand: "#1ABC9C",
                    // brandAccent: "#17A589",
                    brand: "#16A085",
                    brandAccent: "#138D75",
                    brandButtonText: "#f7f9f9",
                    defaultButtonBackground: "#f7f9f9",
                    defaultButtonBackgroundHover: "#ECF0F1",
                    defaultButtonBorder: "#D0D3D4",
                    defaultButtonText: "gray",
                  },
                },
              },
            }}
            providers={["google"]}
          />
        </div>
      ) : (
        <div>
          <HeaderBar session={session} user={user} />
          <div className="p-4 mx-auto flex flex-col max-w-[60rem]">
            <ExerciseCardList />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
