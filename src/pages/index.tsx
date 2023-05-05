import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

const Home = () => {
  const { isLoading: isSessionLoading, session } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (!isSessionLoading && !session) {
      router.push("/login");
    }
  }, [router, isSessionLoading, session]);

  return (
    <>
      <div>Hello!</div>
    </>
  );
};

export default Home;
