import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

function Login() {
  const supabase = useSupabaseClient();

  return (
    <div className="w-[20rem] mx-auto mt-60">
      <div className="text-center mb-6 font-semibold text-2xl font-['Lexend']">
        Healthsimple
      </div>
      <Auth
        redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL}
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
  );
}

export default Login;
