import toast from "react-hot-toast";
import { QueryClient } from "react-query";

function errorHandler(error: unknown): void {
  const title =
    error instanceof Error ? error.message : "서버가 응답하지 않습니다.";
  toast.error(title);
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
