import Image from "next/image"
import {SidebarNav} from "@/components/client-component/account/SidebarNav";

const sidebarNavItems = [
    {
        title: "لیست قرارداد",
        href: "/account/contract/list",
    },
    {
        title: "ساخت قرارداد",
        href: "/account/contract/create",
    },
]

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default function SettingsLayout({children}: SettingsLayoutProps) {
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/forms-light.png"
                    width={1280}
                    height={791}
                    alt="Forms"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/forms-dark.png"
                    width={1280}
                    height={791}
                    alt="Forms"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden space-y-6 p-10 pb-16 md:block">
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    {/*<aside className="-mx-4 lg:w-1/5">*/}
                    {/*    <SidebarNav items={sidebarNavItems}/>*/}
                    {/*</aside>*/}
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </>
    )
}