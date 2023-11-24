import React from 'react';
import {PopoverProps} from "@radix-ui/react-popover";
import useContract from "@/components/client-component/AccountCreateContractClient/hooks/useContract";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {CaretSortIcon} from "@radix-ui/react-icons";
import {cn} from "@/lib/utils";
import {CheckIcon} from "@heroicons/react/24/solid";
import {ApiContractType} from "@/hook/api/contract/useGetAllContract";
import {WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {TrashIcon} from "@heroicons/react/24/outline";


interface PresetSelectorProps extends PopoverProps {
    presets: any[]
}

const PresetSelector = ({presets, ...props}: PresetSelectorProps) => {

    const {contracts, onSetContract} = useContract()

    const {isLoading, data} = contracts.request

    const [open, setOpen] = React.useState(false)
    const [selectedPreset, setSelectedPreset] = React.useState<WrapperItemInterface<ApiContractType>>()

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="flex-1 justify-between md:max-w-[300px] lg:max-w-[400px] px-2" variant="outline">
                        <span>
                             {selectedPreset ? selectedPreset.attributes.letter_number + " ---- " + selectedPreset.attributes.name : "جستوجوی قرارداد ..."}
                        </span>
                        <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[500px] md:max-w-[300px] lg:max-w-[400px] p-0">
                    <Command>
                        <CommandInput placeholder="عنوان قرارداد"/>
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="نمونه قالب های آماده">
                                <CommandItem disabled>
                                    درحال توسعه ....
                                </CommandItem>
                            </CommandGroup>
                            <CommandGroup heading="قراداد ها">
                                {data?.data.map((value, index) => <>
                                    <CommandItem
                                        style={{direction: "rtl"}}
                                        key={index}
                                        id={`contract${index}`}
                                        className="flex justify-between items-center"
                                        onSelect={() => {
                                            setSelectedPreset(value)
                                            onSetContract(value)
                                            setOpen(false)
                                        }}
                                    >
                                        <span>
                                            {`${value.attributes.letter_number}${index + 1} ---- ${value.attributes.name}`}
                                        </span>
                                        <span className="flex justify-between items-center">
                                            <TrashIcon
                                                className={cn(
                                                    "ml-1 h-4 w-4 text-red-200 transition-all duration-300 hover:text-red-600 cursor-pointer",
                                                    selectedPreset?.id === index + 1
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}/>
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    selectedPreset?.id === index + 1
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                        </span>
                                    </CommandItem>
                                </>)}
                            </CommandGroup>
                            <CommandSeparator/>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
};

export default PresetSelector;