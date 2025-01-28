import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,

        },
    },
});
const isOpenWithMood = process.env.NODE_ENV === 'development' ? true : false
export const QueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={isOpenWithMood} />
        </QueryClientProvider>
    )
}