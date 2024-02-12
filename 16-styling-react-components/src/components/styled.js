import styled, {css} from "styled-components";


export const WorkP = styled.p`
    width: 250px;
    border: 1px solid;
    border-left: 4px solid;
    border-radius: 4px;
    font-size: 15px;
    padding: 17px 10px;

    ${({color})=> css`
        border-color: ${color}
    `}
`

export const WorkBtn = styled.button`
    border: none;
    border-radius: 5px;
    padding: 7px 15px;
    margin-right: 10px;
    background-color: #00d4ff;
    cursor: pointer;
`
