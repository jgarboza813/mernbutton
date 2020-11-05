import React, {Fragment, useState, useEffect} from 'react'

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
            <h1>My Project</h1>
            {users === null
                ? (<p>Loading...</p>)
                : users.length === 0
                    ? (<p>No user available</p>)
                    : (<Fragment>
                            <h2>Available Users</h2>
                            <ol>
                                {users?.map((user, index) => (
                                    <li key={index}>
                                        Name: {user.name} - Email: {user.email}
                                    </li>
                                ))}
                            </ol>
                        </Fragment>
                    )
            }

            <form onSubmit={submitForm}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Enter your username" />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Enter your email address" />
                <input type="submit"/>
            </form>
        </Fragment>
    );
};

export default App