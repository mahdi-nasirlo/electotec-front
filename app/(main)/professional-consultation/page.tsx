"use client";

import FormBuilder from "@/components/template/FormBuilder";
import useGetFormData from "@/hook/api/form_group/useGetFormData";
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

    const formSchemaData = useGetFormData("1")

    return (
        <div className="grid grid-cols-12 mt-5">
            <div className="col-span-7 p-3 pr-0 flex items-center">
                <div
                    className={`w-full flex justify-between h-[600px] md:h-[500px] relative rounded-lg p-4`}
                >
                    <main
                        className={`w-full md:mt-5"}`}
                    >
                        <FormBuilder formSchema={formSchemaData.getAll.data}/>
                    </main>
                </div>
            </div>
            <div className="col-span-5 col-end-13 p-3 pl-0">
                <div className="w-full h-[80vh] bg-gray-200 rounded-xl transition-all hover:scale-[1.009]">
                </div>
            </div>
        </div>
    );
}