import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {CopyIcon} from "@radix-ui/react-icons";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import {cn} from "@/lib/utils";


export function PresetShare() {

    const {selectedID} = useContract()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary">اشتراک گذاری</Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-[520px]">
                <div className="flex flex-col space-y-2 text-center sm:text-right">
                    <h3 className="text-lg font-semibold">لینک قرارداد</h3>
                    <p className={cn(
                        "text-sm text-muted-foreground transition-all duration-500 text-red-600 font-medium",
                        selectedID ? "opacity-0 hidden" : "opacity-100 block"
                    )}>
                        برای اشتراک گزاری لینک قرارداد لطفا قرار داد را ذخیره کنید و از منو قرارداد را انتخاب کنید
                    </p>
                </div>
                <div className={cn(
                    "items-center space-x-2 pt-4",
                    selectedID ? "opacity-100 flex" : "opacity-0 hidden"
                )}>
                    <Button type="submit" size="sm">
                        <span className="sr-only">Copy</span>
                        <CopyIcon className="h-4 w-4"/>
                    </Button>
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            value={`https://electotec-front.iran.liara.run/contract/${selectedID}`}
                            readOnly
                            className="h-9 text-left"
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}