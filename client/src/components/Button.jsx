import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Button = ({ text, link="", icon }) => {
    return (
        <StyledButton to={link}>
            {icon}
            <span>{text}</span>
        </StyledButton>
    )
}

const StyledButton = styled(NavLink)`
    background-color: #0078ff;
    color: white;
    border: none;
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    width: fit-content;

    &:hover {
        background-color: #005fcc;
    }

    @media (max-width: 767px) {
        padding: 0.5rem .75rem;
        font-size: .8rem;
        gap: 0.25rem;
    }
`;

export default Button