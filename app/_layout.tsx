import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './services/store';

type _layoutProps = {
    
};

const _layout:React.FC<_layoutProps> = () => {    
    return (
        <Provider store={store} >

    <Stack/>
        </Provider>
    )
}
export default _layout;