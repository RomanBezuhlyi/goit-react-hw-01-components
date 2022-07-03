import styled from '@emotion/styled';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    border: ${props => `2px solid ${props.theme.colors.black}`};
    padding: 5px 0;
`;

export const Description = styled.div`
    text-align: center;
    border-bottom: ${props => `2px dashed ${props.theme.colors.black}`};
`; 

export const Avatar = styled.img`
    max-width: 300px;
`;

export const Name = styled.p`
    font-size: 24px;
    font-weight: bold;
`;

export const Tag = styled.p`
    color: ${props => props.theme.colors.gray};
`;

export const Location = styled.p`
    color: ${props => props.theme.colors.gray};
`;

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const StatsList = styled.li`
    margin: 0px;
    padding: 0px;
`;

export const Label = styled.span`
    display: block;
    color: ${props => props.theme.colors.gray};
`;

export const Quantity = styled.span`
    font-weight: bold;
`;

