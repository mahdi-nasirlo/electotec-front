import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {Checkbox} from "@/components/ui/checkbox";


export function PresetSave() {

    const {save: {form, open, setOpen}, onSave} = useContract()

    const {formState: {isLoading}} = form

    return (
        <Dialog open={open} modal={true}>
            <DialogTrigger asChild>
                <Button variant="default" onClick={() => setOpen(true)}>ذخیره نهایی</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]" onClose={() => setOpen(false)}>
                <DialogHeader>
                    <DialogTitle>ذخیره قرارداد</DialogTitle>
                    <DialogDescription>
                        با ذخیره قرارداد امکان اشتراک گذاری آن فعال خواهد شد.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>عنوان قرارداد</FormLabel>
                                    <FormControl>
                                        <Input {...field as any} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="letter_number"
                            render={({field}) => (
                                <FormItem className="mt-2">
                                    <FormLabel>شماره قرارداد</FormLabel>
                                    <FormControl>
                                        <Input {...field as any} type="number"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="is_important"
                            render={({field}) => (
                                <FormItem
                                    className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 my-5">
                                    <FormControl>
                                        <Checkbox
                                            className="ml-2"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            نیاز به امضای الکترونیک دارد؟
                                        </FormLabel>
                                        <FormDescription>
                                            در صورتی که نیاز به دریافت امضای الکترونیک دارید این گزینه را فعال کنید.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <Button disabled={isLoading} onClick={form.handleSubmit(data => onSave(data))}> ذخیره</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}