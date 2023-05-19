import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../Icon/icon';

export default createBoard({
    name: 'Icon',
    Board: () => <Icon name='Calendar' />,
});
