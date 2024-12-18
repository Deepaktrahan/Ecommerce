// Home.jsx

import React from 'react';
import Navbar from './Navbar';  // This should work if Navbar is default exported
import Products from './Products';
import { useState, useEffect } from 'react';
import { auth, fs } from '../Config/Config';

const Home = () => {
    function GetCurrentUser() {
        const [user, setuser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection('user').doc(user.uid).get().then(snapshot => {
                        setuser(snapshot.data().FullName);
                    });
                } else {
                    setuser(null);
                }
            });
        }, []);
        return user;
    }

    const user = GetCurrentUser();
    return (
        <>
            <Navbar user={user} />
            <Products />
        </>
    );
};

export default Home;
