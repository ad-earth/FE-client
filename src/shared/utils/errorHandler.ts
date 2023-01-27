import toast from "react-hot-toast";
import { QueryClient } from "react-query";

function errorHandler(error: unknown): void {
  const message =
    error instanceof Error
      ? error.message
      : "네트워크 상태를 확인하고 다시 시도해주세요.";
  toast.error(message);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: errorHandler,
    },
    mutations: {
      onError: errorHandler,
    },
  },
});
