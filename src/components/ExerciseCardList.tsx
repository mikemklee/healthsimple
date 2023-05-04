import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "../types/supabase";

type Exercises = Database["public"]["Tables"]["exercises"]["Row"];

const ExerciseCardList = () => {
  const [exercises, setExercises] = useState<Exercises[]>([]);
  const supabase = useSupabaseClient();

  async function loadExercises() {
    try {
      let { data: exercises, error } = await supabase
        .from("exercises")
        .select("*");

      if (error) {
        throw error;
      }

      if (exercises) {
        setExercises(exercises as Exercises[]);
      }
    } catch (error) {
      alert("Error loading exercises data!");
      console.log(error);
    }
  }

  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-xl my-4 px-2">Exercises</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white border border-b-neutral-200  shadow-lg rounded-md p-4 flex flex-col gap-2"
          >
            <h3 className="font-semibold">{exercise.name}</h3>
            <p className="capitalize">{exercise.body_part}</p>
            <p className="capitalize">{exercise.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExerciseCardList;