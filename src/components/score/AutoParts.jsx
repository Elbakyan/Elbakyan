import React, {Component} from "react";
import {connect} from "react-redux";
import { Table,Button, } from 'rsuite';
import  Arr from './arr';


const { Column, HeaderCell, Cell, Pagination } = Table;
class AutoParts extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Arr
        };
    }

    render() {
        return(
            <div className="auto_parts">
                <div className="add_parts">
                    <Button color="violet">add</Button>
                </div>

                <div className="list_parts">
                    <div>
                        <Table
                            height={400}
                            data={this.state.data}
                            onRowClick={data => {
                                console.log(data);
                            }}
                        >
                            <Column width={70} align="center" fixed>
                                <HeaderCell>Id</HeaderCell>
                                <Cell dataKey="id"/>
                            </Column>

                            <Column width={200} fixed>
                                <HeaderCell>First Name</HeaderCell>
                                <Cell dataKey="firstName"/>
                            </Column>

                            <Column width={200}>
                                <HeaderCell>Last Name</HeaderCell>
                                <Cell dataKey="lastName"/>
                            </Column>

                            <Column width={200}>
                                <HeaderCell>City</HeaderCell>
                                <Cell dataKey="city"/>
                            </Column>

                            <Column width={200}>
                                <HeaderCell>Street</HeaderCell>
                                <Cell dataKey="street"/>
                            </Column>

                            <Column width={300}>
                                <HeaderCell>Company Name</HeaderCell>
                                <Cell dataKey="companyName"/>
                            </Column>

                            <Column width={300}>
                                <HeaderCell>Email</HeaderCell>
                                <Cell dataKey="email"/>
                            </Column>
                            <Column width={120} fixed="right">
                                <HeaderCell>Action</HeaderCell>

                                <Cell>
                                    {rowData => {
                                        function handleAction() {
                                            alert(`id:${rowData.id}`);
                                        }

                                        return (
                                            <span>
                                                <a onClick={handleAction}> Edit </a> |{' '}
                                                <a onClick={handleAction}> Remove </a>
                                             </span>
                                        );
                                    }}
                                </Cell>
                            </Column>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AutoParts;