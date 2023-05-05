import ExerciseCardList from "@/components/ExerciseCardList";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Exercises() {
  const { isLoading: isSessionLoading, session } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (!isSessionLoading && !session) {
      router.push("/login");
    }
  }, [router, isSessionLoading, session]);

  return (
    <>
      <ExerciseCardList />
    </>
  );
}

export default Exercises;
