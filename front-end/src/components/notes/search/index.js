import React, { useState, Fragment } from 'react';
import { Input, Column } from 'rbx';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Search = (props) =>{
    const [query, setQuery] = useState("")

    const handleKeyDown = (e) =>{
        if (e.key === 'Enter'){
            props.searchNotes(query)
        }
    }

    const clearSearch = () =>{
        props.fetchNotes();
        setQuery('')
    }

    return(
        <Fragment>
            <Column.Group className="is-vcentered" breakpoint="mobile">
                <Column size={9} offset={1}>
                    <Input type="text" name={query} value={query} 
                           placeholder="Search note ..." 
                           onChange={(e) => setQuery(e.target.value)}
                           onKeyDown={handleKeyDown} />
                </Column>
                <Column mobile={2} size={1}>
                    <a href="#" onClick={() => {
                    props.fetchNotes()
                    setQuery('')
                    }}>
                        <FontAwesomeIcon
                        icon={faTimes}
                        color="grey"
                        className="is-pulled-left  "
                        />
                    </a>
                </Column>
            </Column.Group>
        </Fragment>
    )

}

export default Search;