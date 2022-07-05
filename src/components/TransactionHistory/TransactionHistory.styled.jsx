import styled from '@emotion/styled';

export const Table = styled.table`
    width: 500px;
    text-align: center;
    margin: 50px 0;
`;

export const Thead = styled.thead`
    background-color: aqua;
    color: #fff;
`; 

export const Tr = styled.tr`
    
`;

export const Th = styled.th`
    padding: 20px;
`;

export const Tbody = styled.tbody`
    background-color: azure;
    color: ${props => props.theme.colors.gray};;
`;

export const Td = styled.td`
    padding: 20px;
`;