import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const NotFoundContainer = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    color: white;
    background-color: #121212;
    border-radius: 12px;
    max-width: 600px;
    margin: 4rem auto;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const Message = styled.p`
    font-size: 1.1rem;
    margin-bottom: 2rem;
`;

const NotFoundDescription = () => {
    return (
        <NotFoundContainer>
        <Title>Game Not Found</Title>
        <Message>The game you're looking for doesn't exist or an error occurred.</Message>
        </NotFoundContainer>
    );
};

export default NotFoundDescription;
