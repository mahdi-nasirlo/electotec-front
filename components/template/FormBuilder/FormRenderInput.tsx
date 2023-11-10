"use client"

import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {FormInputsData} from "@/hook/api/form_group/useGetFormData";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import React from "react";

const FormRenderInput = (props: WrapperInterface<FormInputsData>) => {

    const renderInput = (input: WrapperItemInterface<FormInputsData>) => {

        let currentInput

        switch (input.attributes.type) {
            case "text_input":
                currentInput = <>
                    <Label htmlFor="name">{input.attributes.label}</Label>
                    <Input
                        autoFocus
                        type="text"
                        id="name"
                        placeholder={input.attributes.placeholder}
                        name={input.attributes.name}
                        className="w-full"
                        required
                    />
                    {/*{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}*/}
                </>
        }

        return currentInput

    }

    return <>
        <div className="w-full flex flex-col gap-5">
            {props?.data.map(input => renderInput(input))}
        </div>
    </>
}

export default FormRenderInput