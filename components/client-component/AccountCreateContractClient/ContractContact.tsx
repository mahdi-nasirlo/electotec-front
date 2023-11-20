"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import {Editor} from "@/components/ui/editor";

const ContractContact = () => {

    const controlContract = useContract()

    const {form, onSubmit,} = controlContract.content
    
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
                    </div>
                </form>
            </Form>
        </>
    );
};

export default ContractContact;