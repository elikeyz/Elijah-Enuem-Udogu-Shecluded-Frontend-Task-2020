import React from 'react';
import Container from 'react-bootstrap/Container';
import './home.scss';

function Home() {
    return (
        <>
            <main className="landing-container">
                <Container>
                    <h1>Welcome to Frontend Task</h1>
                    <p>Built by Elijah Enuem-Udogu</p>
                </Container>
            </main>
            <footer className="landing-footer">
                <small>Copyright {new Date().getFullYear()}, All Rights Reserved</small>
            </footer>
        </>
    );
}

export default Home;