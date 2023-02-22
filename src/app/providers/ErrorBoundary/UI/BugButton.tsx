import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// ErrorBoundary testing component
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError((prevState) => !prevState);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            style={{ background: 'green' }}
            onClick={throwError}
        >
            Throw error
        </Button>
    );
};
