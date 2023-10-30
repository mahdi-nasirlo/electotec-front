import React from 'react';
import {GetDataForm} from "@/hook/api/form_group/useGetFormData";
import FormWrapper from "@/components/ui/FormWrapper";
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
                        <div className="w-full flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name">{input.attributes.label}</Label>
                                <Input
                                    autoFocus
                                    type="text"
                                    name={input.attributes?.name}
                                    id="name"
                                    placeholder={input.attributes.placeholder}
                                    // value={input.attributes.label}
                                    // onChange={(e) => updateForm({name: e.target.value})}
                                    className="w-full"
                                    required
                                />
                                {/*{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}*/}
                            </div>
                        </div>
                    </>)}
                </FormWrapper>
            </>)}
        </div>
    );
};

const FormSkeleton = () => <></>

export default Index;