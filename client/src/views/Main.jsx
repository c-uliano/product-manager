import React, {useState} from 'react';
import Form from '../components/Form';
import DisplayAll from '../components/DisplayAll';

const Main = (props) => {
    // * states
    const [list, setList] = useState([]);

    return (
        <>
            <Form list={list} setList={setList} />

            <hr />

            <DisplayAll list={list} setList={setList} />
        </>
    )
}

export default Main;