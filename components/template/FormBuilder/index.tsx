import React from 'react';
import useGetFormData, {GetDataForm} from "@/hook/api/form_group/useGetFormData";
import FormWrapper from "@/components/ui/FormWrapper";
import {useMultipleStepForm} from "@/hook/ui/useMultipleStepForm";
import {AnimatePresence} from "framer-motion";
import FormRenderInput from "@/components/template/FormBuilder/FormRenderInput";
import FormRenderChoice from "@/components/template/FormBuilder/FormRenderChoice";
import {Button} from "@/components/ui/button";

interface PropsType {
    formSchema: GetDataForm | undefined,
    isLoading?: boolean
}

const Index = (props: PropsType) => {

    const formSchemaData = useGetFormData("1")

    const {
        previousStep,
        nextStep,
        currentStepIndex,
        isFirstStep,
        isLastStep,
        steps,
        goTo,
        showSuccessMsg,
    } = useMultipleStepForm(4);

    if (props.isLoading) {
        return <FormSkeleton/>
    }

    const formSchema = props.formSchema?.data.attributes

    return (
        <div>
            <h1 className="text-gray-700 font-extrabold text-3xl underline underline-offset-4 decoration-2 decoration-primary mb-8">{formSchema?.title}</h1>
            <form
                // onSubmit={handleOnSubmit}
                className="w-full flex flex-col justify-between h-full"
            >
                <AnimatePresence mode="wait">
                    {formSchema?.forms?.data.map((form, index) => <>
                        {
                            currentStepIndex === index && <FormWrapper title={form.attributes.title} description="">
                                {form.attributes.form_inputs?.data.map(input => <>

                                </>)}
                                <FormRenderInput data={form.attributes.form_inputs?.data || []}/>
                                <FormRenderChoice data={form.attributes.form_choices}/>
                            </FormWrapper>
                        }
                    </>)}
                </AnimatePresence>
                <div className="flex justify-between mt-10">
                    {!isFirstStep && <Button variant="ghost">
                        مرحله قبل
                    </Button>}
                    <Button type="submit">
                        {isLastStep ? "تایید" : "ثبت و ادامه"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

const FormSkeleton = () => <></>


export default Index;