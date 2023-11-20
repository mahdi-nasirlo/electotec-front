"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {CounterClockwiseClockIcon} from "@radix-ui/react-icons";
import useControlContract
    from "@/components/client-component/AccountCreateContractClient/state-managment/useControlContract";
import {Editor} from "@/components/ui/editor";

const ContractContact = () => {

    const {contentForm: form, contentFormSchema: formSchema} = useControlContract()

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="content"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>متن قرارداد</FormLabel>
                                <FormControl>
                                    <Editor {...field as any} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center space-x-2 mt-4">
                        <Button type="submit">پیش نویس</Button>
                        <Button variant="secondary">
                            <span className="sr-only">Show history</span>
                            <CounterClockwiseClockIcon className="h-4 w-4"/>
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
};

export default ContractContact;