import './globals.css'
import type {Metadata} from 'next'
import Providers from "@/providers/query-client-provider";
import Header from "@/components/layouts/header";
import MainContainer from "@/components/layouts/main-container";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Header/>
            <MainContainer>
                {children}
            </MainContainer>
        </Providers>
        </body>
        </html>
    )
}
