import React from 'react';
import {FormInputsData, GetDataForm} from "@/hook/api/form_group/useGetFormData";
import FormWrapper from "@/components/ui/FormWrapper";
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

interface PropsType {
    formSchema: GetDataForm | undefined,
    isLoading?: boolean
}

const Index = (props: PropsType) => {

    if (props.isLoading) {
        return <FormSkeleton/>
    }

    const formSchema = props.formSchema?.data.attributes

    return (
        <div>
            {formSchema?.forms?.data.map(form => <>
                <FormWrapper title={formSchema?.title} description="">
                    {form.attributes.form_inputs?.data.map(input => <>

                    </>)}
                    <div className="w-full flex flex-col gap-5">
                        <FormRenderInput data={form.attributes.form_inputs?.data || []}/>
                    </div>
                </FormWrapper>
            </>)}
        </div>
    );
};

const FormSkeleton = () => <></>

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
                        // onChange={(e) => updateForm({name: e.target.value})}
                        className="w-full"
                        required
                    />
                    {/*{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}*/}
                </>
        }

        return currentInput

    }

    return <>{props?.data.map(input => renderInput(input))}</>
}

export default Index;