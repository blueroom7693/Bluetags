import { User } from "@prisma/client";
import useSWR from "swr";
import { useSession } from "next-auth/react";

interface UserResponse {
  data: User;
}

export default function useUser() {
  const { data, error } = useSWR<UserResponse>("/api/users");
  return { user: data?.data, isLoading: !data && !error };
}
