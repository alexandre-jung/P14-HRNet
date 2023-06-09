import { useEffect, useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { TextField } from '../../../components/text-field/text-field';

export default createBoard({
    name: 'ui/TextField',
    Board: () => {
        const [value, setValue] = useState('');

        useEffect(() => {
            console.log(`value: ${value ? value : '<empty>'}`);
        });

        return (
            <TextField
                label="First name"
                onChange={setValue}
                placeholder="Alexandre"
                required={true}
                value={value}
            />
        );
    },
    environmentProps: {
        canvasWidth: 250
    }
});
