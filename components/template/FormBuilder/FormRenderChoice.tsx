import React, {useState} from 'react';
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {FormChoicesData} from "@/hook/api/form_group/useGetFormData";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface PropsType {
    data: WrapperInterface<FormChoicesData> | undefined
}

const FormRenderChoice = (props: PropsType) => {

    return (
        <div>
            <RenderFieldChoice data={props.data as any}/>
            {/*{props.data?.data.map((value, index) => <>*/}
            {/*    {value.attributes.type === "field" ? RenderFieldChoice(value) : RenderButtonChoice(value)}*/}
            {/*</>)}*/}
        </div>
    );
};

const RenderButtonChoice = (data: WrapperItemInterface<FormChoicesData>) => {
    return <></>
}

type Plan = "arcade" | "advanced" | "pro";


const RenderFieldChoice = ({data}: { data: WrapperInterface<FormChoicesData> }) => {
    const [formData, setFormData] = useState<any>();

    return <>
        <ToggleGroup.Root
            orientation="horizontal"
            className="flex flex-col gap-3 my-2 md:items-center"
            type="single"
        >
            {data.data.map((value, index) => <>
                <ToggleGroup.Item
                    value={value.attributes.lable}
                    className="w-full transition-all flex justify-end text-right data-[state=on]:border-red-600 data-[state=on]:border-2 border hover:border-red-600 py-5 px-3 rounded-lg"
                >
                    <div className="relative -top-1 items-start md:top-0">
                        <p className="font-semibold">{value.attributes.lable}</p>
                        {value.attributes?.description && <p style={{direction: "rtl"}}
                                                             className="mt-3 text-gray-400 text-sm">{value.attributes.description}</p>}
                    </div>
                </ToggleGroup.Item>
            </>)}
        </ToggleGroup.Root>
        {/*<RadioGroup defaultValue="option-one">*/}
        {/*    <div*/}
        {/*        className="mb-3 flex justify-start flex-row-reverse items-center transition-all space-x-2 border hover:border-red-600 py-5 px-3 rounded-lg">*/}
        {/*        <RadioGroupItem value={`option-${index}`} id={`option-${index}`}/>*/}
        {/*        <Label className="flex flex-col" htmlFor={`option-${index}`}>*/}
        {/*          <span className="text-md">*/}
        {/*                {value.attributes.lable}*/}
        {/*          </span>*/}
        {/*            {*/}
        {/*                value.attributes.description &&*/}
        {/*                <span style={{direction: "rtl"}} className="mt-3 text-gray-400 text-xs">*/}
        {/*            {value.attributes.description}*/}
        {/*            </span>*/}
        {/*            }*/}
        {/*        </Label>*/}
        {/*    </div>*/}
        {/*</RadioGroup>*/}
    </>
}

export default FormRenderChoice;