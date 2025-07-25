import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function QueryClientProviderCom({children}){
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}