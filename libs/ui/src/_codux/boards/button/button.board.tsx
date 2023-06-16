import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';

export default createBoard({
    name: 'ui/Button',
    Board: () => <Button disabled={false}>Hello Button</Button>,
});
