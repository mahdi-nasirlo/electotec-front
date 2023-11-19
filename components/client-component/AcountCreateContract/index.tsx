"use client"

import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {DocumentTextIcon, PrinterIcon} from "@heroicons/react/24/outline";
import {PencilLineIcon} from "lucide-react";
import ControlContractProvider
    from "@/components/client-component/AcountCreateContract/state-managment/ControlContractProvider";
import {PresetSave} from "@/components/client-component/AcountCreateContract/PresetSave";
import {PresetShare} from "@/components/client-component/AcountCreateContract/PresetShare";
import ContractViewer from "@/components/template/ContractViewer";
import ContractContact from "@/components/client-component/AcountCreateContract/ContractContact";


export default function Index() {

    return (
        <>
            <ControlContractProvider>
                <div className="hidden h-full flex-col md:flex border rounded-lg">
                    <div
                        className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
                        <h2 className="text-lg font-semibold">قرارداد</h2>
                        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
                            <PresetSave/>
                            <PresetShare/>
                        </div>
                    </div>
                    <Separator/>
                    <Tabs defaultValue="edit" className="flex-1">
                        <div className="container h-full py-6">
                            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
                                <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                                    <div className="grid gap-2">
                                        <TabsList className="grid grid-cols-3 h-fit">
                                            <TabsTrigger value="preview">
                                                <span className="sr-only">پیش نمایش</span>
                                                <PrinterIcon className="h-5 w-5"/>
                                            </TabsTrigger>
                                            <TabsTrigger value="insert">
                                                <span className="sr-only">مقادیر</span>
                                                <DocumentTextIcon className="w-5 h-5"/>
                                            </TabsTrigger>
                                            <TabsTrigger value="edit">
                                                <span className="sr-only">ویرایش</span>
                                                <PencilLineIcon className="h-5 w-5"/>
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>
                                </div>
                                <div className="md:order-1">
                                    <TabsContent value="preview" className="mt-0 border-0 p-0">
                                        <ContractViewer/>
                                    </TabsContent>
                                    <TabsContent value="insert" className="mt-0 border-0 p-0">
                                        {/*<ContractInsert/>*/}
                                    </TabsContent>
                                    <TabsContent value="edit" className="mt-0 border-0 p-0">
                                        <ContractContact/>
                                    </TabsContent>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </ControlContractProvider>
        </>
    )
}