import React from 'react';
import { Button } from '@material-ui/core';
import { firebase } from '../firebase/Firebaseconfig';



const auth = firebase

function SignIn() {
    function signInwithGoogle (){
        const provider = new firebase.auth.GoogleAuthprovider(db)
        auth.signInwithPopup(provider)
    }
  return (

    <div>
<Button onClick={signInwithGoogle}>SignIn with Google</Button>

    </div>
   


  );
}

export default SignIn