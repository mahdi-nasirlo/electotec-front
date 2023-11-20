import * as React from "react"
import {Input} from "@/components/ui/input";
import {ControllerRenderProps} from "react-hook-form";
import {Editor as TinyEditor} from "@tinymce/tinymce-react";

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
                    'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                    'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                    'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'wordcount'
                ],
                toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist checklist outdent indent | removeformat | a11ycheck code table',
                content_style: `body { font-family: "IRANSansfanum" !important; font-size:14px !important; direction: rtl !important;text-align: right }`,
            }}
        />
    </>
})

Editor.displayName = "Input"

export {Editor}