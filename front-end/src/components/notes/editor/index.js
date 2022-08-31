import React, { Fragment, useState, useEffect } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

const Editor = (props) => {
    const [currentContent, setCurrentContent] = useState('');
    const [timer, setTimer] = useState(null);

    useEffect(() =>{
        setCurrentContent(props.notes.body)
    }, [props.notes])

    const updateNote = (content) =>{
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 30);
        props.updateNote(props.notes, {'title': title, 'body': content})
    }

    const handleChange = (content, delta, source) =>{
        clearTimeout(timer);
        if (source === 'user'){
            setCurrentContent(content);
            setTimer(setTimeout(() => updateNote(content), 2000))
        }
    }

    const modules = {
        toolbar:[
            [{'header': '1'}, {'header': '2'}, {'font': []}],
            ['bold', 'italic', 'underline', 'stike', 'blockquote', 'code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'], 
            ['clean']
        ]
    }

    return(
        <Fragment>
            <ReactQuill value={currentContent} modules={modules} onChange={handleChange}/>
        </Fragment>
    )
}

export default Editor;

