"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {CounterClockwiseClockIcon} from "@radix-ui/react-icons";
import {Textarea} from "@/components/ui/textarea";
import useControlContract from "@/components/client-component/AcountCreateContract/state-managment/useControlContract";

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
                                    <Textarea
                                        {...field}
                                        placeholder="We're writing to [inset]. Congrats from OpenAI!"
                                        style={{direction: "rtl"}}
                                        className="h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px] text-right"
                                    />
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