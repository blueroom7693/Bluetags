import axios, { AxiosError } from "axios";
import { useState } from "react";

interface UseMutationState<T, U> {
  loading: boolean;
  data?: T;
  error?: U;
  status?: number;
}

type useMutationResult<T, U> = [(data: any) => void, UseMutationState<T, U>];

export default function useMutation<T = any, U = any>(
  url: string
): useMutationResult<T, U> {
  const [state, setSate] = useState<UseMutationState<T, U>>({
    loading: false,
    data: undefined,
    error: undefined,
    status: undefined,
  });
  async function mutation(body: any) {
    try {
      const response = await axios.post<T>(url, body);
      const data = response.data;
      const status = response.status;
      setSate((prev) => ({ ...prev, data }));
      setSate((prev) => ({ ...prev, status }));
    } catch (e: any) {
      const error = e.response.data.error;
      const status = e.response.status;
      setSate((prev) => ({ ...prev, error }));
      setSate((prev) => ({ ...prev, status }));
    } finally {
      setSate((prev) => ({ ...prev, loading: false }));
    }
  }
  return [mutation, { ...state }];
}
