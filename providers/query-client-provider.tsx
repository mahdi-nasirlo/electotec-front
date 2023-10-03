'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function Providers({children}: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient())
    const [open, setOpen] = useState(false)

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}