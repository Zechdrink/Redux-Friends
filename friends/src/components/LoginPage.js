import React from 'react';

class  LoginPage extends React.Component {
    state = { 
        inputValue: ''
     }

    render() { 
        return (   
        <>

        <form>
            <input
            placeholder = "username"
            />
            <input
            placeholder = "password"
            />
        </form>

        <button>IAMBTTN</button>

        </> 
        );
    }
}
 
export default LoginPage;