import { useAuthGuard } from "@/hooks/useAuthGuard";
import InterfaceUtils from "@/utils/interface";

const Home = () => {
  const { isSessionLoading, session } = useAuthGuard();

  if (isSessionLoading || !session) return null;

  const user = session.user;
  const userName = user?.user_metadata?.name;

  return (
    <>
      <div className="text-xl my-4">
        Good {InterfaceUtils.getTimeOfDay()},{" "}
        <span className="font-semibold">{userName}</span>
      </div>
    </>
  );
};

export default Home;
