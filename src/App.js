import React, {Fragment, useState, useEffect} from 'react'
import "./styles.css";

import Page from "./Page";

const App = function () {
    const [users, setUsers] = useState(null);
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const fetchUsers = () => {
        fetch("/api/users", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(users => users.json())
            .then(users => { setUsers(users) })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        console.log('Fetching users...');
        fetchUsers();
    }, []);

    const submitForm = event => {
        if (name === "") {
            alert("Please fill the username field");
            return;
        }

        if (email === "") {
            alert("Please fill the email field");
            return;
        }

        fetch("/api/users", {
            method: 'POST',
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            console.log(`Account ${name} created successfully`);
            setUsers(users => [...users, { name, email }]);
            setUsername('');
            setEmail('');
        }).catch(() => {
            alert("Could not create account. Please try again");
        });

        event.preventDefault();
    }

    return (
        <Fragment>
            <Page />
        </Fragment>
    );
};

export default App