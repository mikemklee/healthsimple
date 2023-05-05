import { useAuthGuard } from "@/hooks/useAuthGuard";

const Home = () => {
  const { isSessionLoading, session } = useAuthGuard();

  if (isSessionLoading || !session) return null;

  return (
    <>
      <div>Hello!</div>
    </>
  );
};

export default Home;
