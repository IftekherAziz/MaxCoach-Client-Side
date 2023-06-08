import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUser = () => {
  const { user, loading } = useAuth();
  const [basicAxios] = useAxios();

  const { data: userFromDB, isLoading: isUserFromDBLoading } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const result = await basicAxios.get(`users/${user?.email}`);
      return result.data;
    },
  });
  return [userFromDB, isUserFromDBLoading];
};

export default useUser;
