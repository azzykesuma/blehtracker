import styled from 'styled-components';
import { CircleWithCross } from '@styled-icons/entypo/CircleWithCross'

export const OuterCard = styled.div`
  overflow: hidden;
  max-width : 50%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin: 48px auto 0;
  background-color : #4BDEF6;

  @media screen and (max-width : 800px) {
    padding: 0 0 10px;
    max-width : 90%;
  }
`;

export const TopCard = styled.div`
    margin-bottom : 1rem;
    color : #125863;
    font-size : 1.3rem;
    text-align : center;
`

export const BalanceInfo = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    align-items : center;
    /* background-color : #32D335; */
    padding : 1rem 1rem;
`

export const BalanceAmount = styled.div`
    padding : 1.5rem 0.3rem;
    color : #fff;
    background-color : ${props => props.primary ? '#EB2626' : '#229BE0'};
    margin-right : 0.5rem;
    border-radius : 3px;
    display : column;
    text-align : center;

    &:hover {
        background-color : ${props => props.primary ? '#A31818' : '#1867A3'};
        transition : 0.5s ease-in-out;
    }
    
`
export const Row = styled.div`
    content: "";
    display: block;
    clear: both;
    margin-bottom : 15px;
    /* margin-left : 15px; */
`

export const InputHeader = styled.label`
    font-size : 16px;
    color : #2B1717;
    float : left;
    width : 100%;
    margin-bottom : 3px;
`

export const Form = styled.form`
    margin-left : 0;
`

export const FormContainer = styled.div`
    display : inline-block;
    padding : 20px 18px;

    @media screen and (max-width : 840px) {
        display : block;
    }
`

export const Input = styled.input`
    border-radius : 5px;
    padding : 10px 2px;
    margin-bottom : ${props => props.amount ? '15px' : '20px'};
    float : left;
    width : 100%;
`
export const Button = styled.button`
    padding : 8px 7px;
    border-radius : 4px;
    background-color : #3B9862;
    color : #fff;
    transition : 0.5s ease-out;
    cursor : pointer;
    border : none;
    margin-right : 10px;

    &:hover {
        transition : 0.5s ease-out;
        cursor : pointer;
        transform : translate(5px);
        background-color : #385042;
    }

    &:disabled {
        background-color : grey;
        cursor : not-allowed;
    }
`

export const TransactionCont = styled.div`
    /* padding : 10px 8px; */
    padding-left : 0;
    background : transparent;
    justify-content : center;
    align-items : center;
`

export const ListItem = styled.ul`
    margin-bottom : 5px;
`

export const ListContainer = styled.div`
    background-color : transparent;
    padding : 8px 15px;
    width : 75%;
    border-radius : 5px;  
    margin-left : 15px;
    margin-bottom : 10px;
`

export const List = styled.li`
    list-style : none;
    color : #141E3D;
    padding : 8px 10px;
    margin : 9px 7px;
    border-radius : 5px;
    background-color : #fff;
    display : grid;
    grid-gap : 70%;
    grid-auto-flow: column;
    justify-items : center;

    @media screen and (max-width : 640px) {
        grid-gap : 30%;
    }
`

export const Icon = styled(CircleWithCross)`
    color : red;
    height : 20px;
    position : relative;
    left : 35%;
    display : grid;
    cursor : pointer;

`

export const P = styled.p`
    line-height : 0.5px;
    font-size : 14px;
`