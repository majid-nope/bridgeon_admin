
import { MantineProvider } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const DatePick = ({ onChange, date }) => {
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            <DatePicker
                color='white'
                placeholder='please choose date'
                label="Choose a date"
                value={date}
                onChange={onChange}
            />
        </MantineProvider>

    );
};

export default DatePick;
