import { styled } from 'styled-components';

export const Button = styled.button`
    background-color: #ccc;
    border: none;
    color: white;
    padding: 2.85rem 2.85rem;
    position: absolute;
    top: -2.85rem;
    right: -2.85rem;
    rotate: 45deg;

    &:hover {
    //color: #97C1E6;
    background-color: #999;
    }

    &.active {
        background-color: #333
    }
`