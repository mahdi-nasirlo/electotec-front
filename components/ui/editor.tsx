import * as React from "react"
import {useRef, useState} from "react"
import {Editor as TinyEditor} from "@tinymce/tinymce-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

interface EditorProps {
    "name": string,
    "value": string,
    onChange: (events: any) => any
}

const Editor = ({field}: { field: EditorProps }) => {

    const editorRef = useRef<any>(null);

    const [state, setState] = useState()

    return (
        <>
            <TinyEditor
                onInit={(evt, editor) => editorRef.current = editor}
                tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                // initialValue='<p>This is the initial content of the editor.</p>'
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onChange={(e: any) => field.onChange(e.lastLevel.content)}
            />
            <Input value={field.value}/>
            <Button onClick={() => {
                field.onChange("lsdjfalkjfds")
            }}>
                test
            </Button>
        </>
    )
}

Editor.displayName = "Input"

export {Editor}