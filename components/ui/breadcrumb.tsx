'use client'

import React, {ReactNode} from 'react'
import {usePathname} from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

function Breadcrumb(props: TBreadCrumbProps) {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <div>
            <ul className={`${props.containerClasses} flex items-center py-3 gap-2 text-gray-400 font-medium text-md`}>
                <li className={`${props.listClasses} text-gray-300`}><Link href={'/'}>{props.homeElement}</Link></li>
                <span className="text-gray-300">
                    {pathNames.length > 0 && props.separator}
                </span>
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemClasses = paths === href ? `${props.listClasses} ${props.activeClasses}` : props.listClasses
                        let itemLink = props.capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                        return (
                            <React.Fragment key={index}>
                                <li className={`${itemClasses} ${pathNames.length - 1 !== index && "text-gray-300"}`}>
                                    <Link href={href}>{itemLink}</Link>
                                </li>
                                {
                                    pathNames.length !== index + 1 &&
                                    <span
                                        className={`${pathNames.length - 1 !== index && "text-gray-400"}`}>
                                          {props.separator}
                                     </span>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Breadcrumb;