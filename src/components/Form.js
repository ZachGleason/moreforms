import React, { usestate } from  'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const  [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
}

    const createUser = (e) => {

        const newUser = {firstName, lastName, email, password}
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword ("");

        setHasBeenSubmitted( true );
    }

// const handleTitle = (e) => {
//    const [title, setTitle] = useState("");
//    const [titleError, setTitleError] = useState(""); 


    
