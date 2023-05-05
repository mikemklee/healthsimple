import ExerciseCardList from "@/components/ExerciseCardList";
import { useAuthGuard } from "@/hooks/useAuthGuard";

function Exercises() {
  const { isSessionLoading, session } = useAuthGuard();

  if (isSessionLoading || !session) return null;

  return (
    <>
      <ExerciseCardList />
    </>
  );
}

export default Exercises;
