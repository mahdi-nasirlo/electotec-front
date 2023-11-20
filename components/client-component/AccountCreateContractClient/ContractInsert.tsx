import React from 'react';
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Empty from "@/components/ui/empty";

const ContractInsert = () => {

    const controlContract = useContract()

    const {form, fieldArray, onSubmit} = controlContract.insert

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    {fieldArray.fields.map((field, index) => (
                        <FormField
                            control={form.control}
                            key={field.id}
                            name={`values.${index}.name`}
                            render={({field: renderField}) => (
                                <FormItem>
                                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                                        مقادیر متغیر
                                    </FormLabel>
                                    <FormDescription
                                        style={{direction: "rtl"}}
                                        className={cn(index !== 0 && "sr-only")}
                                    >
                                        در این قسمت میتوانید مقادیر متغیر یا مقادیری که نیاز به ورود اطلاعات دارند
                                        را
                                        مشخص کنید.
                                    </FormDescription>
                                    <FormControl>
                                        <Input {...renderField}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    ))}
                    {fieldArray.fields.length === 0 ? <>
                        <div className="flex items-center justify-center flex-col">
                            <Empty className="w-full h-44" title="مقداری وجود ندارد"/>
                            <Button
                                className="mt-3"
                                variant="secondary"
                                size="sm"
                                onClick={() => fieldArray.append({name: ""})}
                            >
                                افزودن متغیر
                            </Button>
                        </div>
                    </> : <div className="flex justify-start gap-3 mt-3">
                        <Button
                            type="submit"
                            variant="default"
                        >
                            ثبت
                        </Button>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => fieldArray.append({name: ""})}
                        >
                            افزودن متغیر
                        </Button>
                    </div>}
                </div>
            </form>
        </Form>
    );
};

export default ContractInsert;