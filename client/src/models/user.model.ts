import { types } from 'mobx-state-tree';

export const UserModel = types.model({
    email: types.optional( types.string, "" ),
    password: types.optional( types.string, "" )
})
.actions( self => ({
    setEmail( newEmail: string ){
        self.email = newEmail;
    },

    setPassword( newPassword: string ){
        self.password = newPassword;
    }
}))