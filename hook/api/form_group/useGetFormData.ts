import {useQuery} from "@tanstack/react-query";
import {getFetcher} from "@/lib/fetch-functions/getFetcher";
import {WrapperInterface, WrapperItemInterface} from "@/response-interface/wrapper-interface";

export interface GetDataForm {
    data: WrapperItemInterface<GetDataFormAttribute>
}

interface GetDataFormAttribute {
    title: string,
    key: string,
    forms?: WrapperInterface<FormItemData>
}

export interface FormItemData {
    title: string,
    desc: string,
    step: number,
    form_inputs?: WrapperInterface<FormInputsData>
}

export interface FormInputsData {
    name?: string,
    label: string,
    placeholder: string,
    is_required: boolean,
    type: inputsType
}

type inputsType =
    "select"
    | "multiselect"
    | "autocomplete"
    | "select_pro"
    | "text_input"
    | "textarea"
    | "switch"
    | "checkbox"
    | "radio"

const useGetFormData = (id: string) => {

    const {
        data,
        isLoading,
        isError
    } = useQuery<GetDataForm | undefined>({
        queryKey: ["/form_groups/" + id],
        queryFn: () => getFetcher(`/api/form-groups/${id}?populate[forms][populate][0]=form_inputs`)
    })

    return {getAll: {isLoading: isLoading, data: data, isError: isError}}
};

export default useGetFormData;