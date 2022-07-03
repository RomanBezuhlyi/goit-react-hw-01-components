import styled from '@emotion/styled';

export const CardStats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0;
    background-color: ${props => props.theme.colors.bgColor};
`;

export const CardTitle = styled.h2`
    color: ${props => props.theme.colors.gray};
`; 

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 75px;
    height: 75px;
    background-color: ${() => '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()};
`;

export const Label = styled.span`
    display: block;
    font-weight: bold;
    color: ${props => props.theme.colors.bgColor};
`;

export const Percentage = styled.span`
    display: block;
    font-weight: bold;
    color: ${props => props.theme.colors.bgColor};
`;

