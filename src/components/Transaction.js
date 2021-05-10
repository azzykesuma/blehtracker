import React from 'react'
import {
    TransactionCont,
    ListItem,
    ListContainer,
    List,
    Icon
} from './Global'


const Transaction = ({data,setData,deleteItem}) => {


    console.log(data)

    return (
        <TransactionCont>
            <ListContainer>
                <ListItem>
                        {
                            data.map(item => {
                                return (
                                    <List key={item.id}>{item.name}  {item.amount} <Icon onClick={deleteItem}/> </List>
                                )
                            })
                        }
                </ListItem>
            </ListContainer>
        </TransactionCont>
    )
}

export default Transaction
