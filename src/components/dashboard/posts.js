import * as React from "react";
import { List, Datagrid, TextField, EditButton, } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="username" />
            <TextField source="user_password" />
            <TextField source="department" />
            <TextField source="is_admin" />
            <EditButton />
        </Datagrid>
    </List>
);