import { types } from 'mobx-state-tree';

export const CityModel = types.model({
    name: types.optional( types.string, "" )
})
.actions( self => ({
    setName( newName: string ){
        self.name = newName;
    }
}))