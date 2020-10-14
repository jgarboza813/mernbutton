import React, {Fragment, useState, useEffect} from 'react'

const App = function () {
    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("/api/users")
            .then((users) => setUsers(users))
            .catch((err) => console.log(err));
    }, []);

    function submitForm() {
        if (username === "") {
            alert("Please fill the username field");
            return;
        }

        if (email === "") {
            alert("Please fill the email field");
            return;
        }

        fetch("/api/users", {
            method: 'POST', body: JSON.stringify(
                {
                    username: username,
                    email: email
                },
            )
        }).then(function () {
            alert("Account created successfully");
            window.location.reload();
        }).catch(function () {
            alert("Could not creat account. Please try again");
        });
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
                                {users.map((user, index) => (
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
                    type="text"
                    placeholder="Enter your username" />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email address" />
                <input type="submit"/>
            </form>
        </Fragment>
    );
};
export default App