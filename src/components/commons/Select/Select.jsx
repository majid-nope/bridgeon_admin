import React from 'react'
import { MantineProvider, Select as Selector } from '@mantine/core';
const Select = ({ placeholder, label, data, theme }) => {
    return (
        <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
            <Selector
                label={label}
                placeholder={placeholder}
                data={data}
            />

        </MantineProvider>

    )
}

export default Select