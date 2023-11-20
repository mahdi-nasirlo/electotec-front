import * as React from "react"
import {Input} from "@/components/ui/input";
import {ControllerRenderProps} from "react-hook-form";
import {Editor as TinyEditor} from "@tinymce/tinymce-react";

interface OnchangeProps {
    readonly type: string,
    readonly target: any,
    readonly isDefaultPrevented: () => boolean,
    readonly preventDefault: () => void,
    readonly isPropagationStopped: () => boolean,
    readonly stopPropagation: () => void,
    readonly isImmediatePropagationStopped: () => boolean,
    readonly stopImmediatePropagation: () => void,
    lastLevel: {
        type: string,
        content: string,
    }
}

const Editor = React.forwardRef((props: ControllerRenderProps & HTMLInputElement) => {

    return <>
        <TinyEditor
            tinymceScriptSrc={'/tinymce/tinymce.min.js'}
            initialValue={props.value}
            onChange={(t: any) => props.onChange(t.level.content)}
            init={{
                height: 500,
                menubar: false,
                language: "fa",
                ui_mode: "split",
                directionality: "rtl",
                placeholder: props.placeholder,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat ',
                content_style: `body { font-family: "IRANSansfanum" !important; font-size:14px !important; direction: rtl !important;text-align: right }`,
            }}
        />
    </>
})

Editor.displayName = "Input"

export {Editor}