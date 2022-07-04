import styled from '@emotion/styled';

export const List = styled.ul`
    display: block;
    margin: 50px 0 30px 0;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 200px;
    height: 50px;
    padding: 10px;
    box-shadow: -20px 20px 0 -17px ${props => props.theme.colors.borderGray},
            20px -20px 0 -17px ${props => props.theme.colors.borderGray},
            20px 20px 0 -20px ${props => props.theme.colors.violet},
            0 0 0 2px ${props => props.theme.colors.violet};

    margin-bottom: 20px;
`; 

export const Status = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50% ;
    background-color: ${props => {
    switch (props.className) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'gray';
    }
    }};
`;

export const Avatar = styled.img`
    background-color: ${props => props.theme.colors.violet};
    border-radius: 3px;
    padding: 5px;
`;

export const Name = styled.p`
    color: ${props => props.theme.colors.violet};
    font-weight: bold;
`;