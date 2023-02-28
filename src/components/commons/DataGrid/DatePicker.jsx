
import { MantineProvider } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const DatePick = () => {
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            <DatePicker
                color='white' 
                placeholder='please choose date'
                label="Choose a date"
                value={null}
                onChange={(date) => console.log(date)}
            />
        </MantineProvider>

    );
};

export default DatePick;
