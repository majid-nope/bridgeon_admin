import React from 'react'
import { MantineProvider, Select as Selector } from '@mantine/core';
const Select = ({ placeholder, label, data, theme, defaultValue, size }) => {
    return (
        <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
            <Selector
                size={size}
                defaultValue={defaultValue ? defaultValue : null}
                label={label}
                placeholder={placeholder}
                data={data}
            />

        </MantineProvider>

    )
}

export default Select