import React from 'react'
import { MantineProvider, Select as Selector } from '@mantine/core';
const Select = ({ placeholder, label, data, theme, defaultValue, size, onChange, value }) => {
    return (
        <MantineProvider theme={{ colorScheme: theme }} withGlobalStyles withNormalizeCSS>
            <Selector
                onChange={onChange}
                size={size}
                defaultValue={defaultValue ? defaultValue : null}
                label={label}
                placeholder={placeholder}
                data={data}
                value={value}
            />

        </MantineProvider>

    )
}

export default Select