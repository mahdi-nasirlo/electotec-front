"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useMultipleStepForm} from "@/hook/ui/useMultipleStepForm";
import {AnimatePresence} from "framer-motion";
import useGetFormData from "@/hook/api/form_group/useGetFormData";
import FormBuilder from "@/components/template/FormBuilder";
// import UserInfoForm from "@/components/UserInfoForm";
// import PlanForm from "@/components/PlanForm";
// import AddonsForm from "@/components/AddonsForm";
// import FinalStep from "@/components/FinalStep";
// import SuccessMessage from "@/components/SuccessMessage";

interface AddOn {
    id: number;
    checked: boolean;
    title: string;
    subtitle: string;
    price: number;
}

export type FormItems = {
    name: string;
    email: string;
    phone: string;
    plan: "arcade" | "advanced" | "pro";
    yearly: boolean;
    addOns: AddOn[];
};

const initialValues: FormItems = {
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    yearly: false,
    addOns: [
        {
            id: 1,
            checked: true,
            title: "Online Service",
            subtitle: "Access to multiple games",
            price: 1,
        },
        {
            id: 2,
            checked: false,
            title: "Large storage",
            subtitle: "Extra 1TB of cloud save",
            price: 2,
        },
        {
            id: 3,
            checked: false,
            title: "Customizable Profile",
            subtitle: "Custom theme on your profile",
            price: 2,
        },
    ],
};

export default function Home() {
    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
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

    const formSchemaData = useGetFormData("1")

    function updateForm(fieldToUpdate: Partial<FormItems>) {
        const {name, email, phone} = fieldToUpdate;

        if (name && name.trim().length < 3) {
            setErrors((prevState) => ({
                ...prevState,
                name: "Name should be at least 3 characters long",
            }));
        } else if (name && name.trim().length > 15) {
            setErrors((prevState) => ({
                ...prevState,
                name: "Name should be no longer than 15 characters",
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                name: "",
            }));
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            setErrors((prevState) => ({
                ...prevState,
                email: "Please enter a valid email address",
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                email: "",
            }));
        }

        if (phone && !/^[0-9]{10}$/.test(phone)) {
            setErrors((prevState) => ({
                ...prevState,
                phone: "Please enter a valid 10-digit phone number",
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                phone: "",
            }));
        }

        setFormData({...formData, ...fieldToUpdate});
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(errors).some((error) => error)) {
            return;
        }
        nextStep();
    };

    return (
        <div className="grid grid-cols-12 mt-5">
            <div className="col-span-7 p-3 pr-0 flex items-center">
                <div
                    className={`w-full flex justify-between ${
                        currentStepIndex === 1 ? "h-[600px] md:h-[500px]" : "h-[500px]"
                    } relative rounded-lg p-4`}
                >
                    {!showSuccessMsg ? (
                        <></>
                        // <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
                    ) : (
                        ""
                    )}
                    <main
                        className={`${showSuccessMsg ? "w-full" : "w-full md:mt-5"}`}
                    >
                        {showSuccessMsg ? (
                            <AnimatePresence mode="wait">
                                <div>success message</div>
                            </AnimatePresence>
                        ) : (
                            <form
                                onSubmit={handleOnSubmit}
                                className="w-full flex flex-col justify-between h-full"
                            >
                                <AnimatePresence mode="wait">
                                    {/*{currentStepIndex === 0 && (*/}
                                    {/*    <UserInfoForm*/}
                                    {/*        key="step1"*/}
                                    {/*        {...formData}*/}
                                    {/*        updateForm={updateForm}*/}
                                    {/*        errors={errors}*/}
                                    {/*    />*/}
                                    {/*)}*/}
                                    {/*    {currentStepIndex === 1 && (*/}
                                    {/*        <PlanForm key="step2" {...formData} updateForm={updateForm}/>*/}
                                    {/*    )}*/}
                                    {/*    {currentStepIndex === 2 && (*/}
                                    {/*        <AddonsForm key="step3" {...formData} updateForm={updateForm}/>*/}
                                    {/*    )}*/}
                                    {/*    {currentStepIndex === 3 && (*/}
                                    {/*        <FinalStep key="step4" {...formData} goTo={goTo}/>*/}
                                    {/*    )}*/}
                                    <FormBuilder formSchema={formSchemaData.getAll.data}/>
                                </AnimatePresence>
                                <div className="w-full items-center flex justify-between">
                                    <div className="">
                                        <Button
                                            onClick={previousStep}
                                            type="button"
                                            variant="ghost"
                                            className={`${
                                                isFirstStep
                                                    ? "invisible"
                                                    : "visible p-0 text-neutral-200 hover:text-white"
                                            }`}
                                        >
                                            Go Back
                                        </Button>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                                            <Button
                                                type="submit"
                                                className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
                                            >
                                                {isLastStep ? "Confirm" : "Next Step"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </main>
                </div>
            </div>
            <div className="col-span-5 col-end-13 p-3 pl-0">
                <div className="w-full h-[80vh] bg-gray-200 rounded-xl">
                </div>
            </div>
        </div>
    );
}