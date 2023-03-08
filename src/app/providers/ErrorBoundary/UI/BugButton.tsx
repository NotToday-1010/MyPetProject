import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// ErrorBoundary testing component
export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError((prevState) => !prevState);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const { t } = useTranslation();

    return (
        <Button
            style={{ background: 'green' }}
            onClick={throwError}
        >
            {t('Отправить ошибку')}
        </Button>
    );
};
