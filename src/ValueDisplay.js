import { useEffect, useRef } from 'react';

const ValueDisplay = ({ value }) => {
    const prevValueRef = useRef('');

    useEffect(() => {
        prevValueRef.current = value;
    }, [value]);

    const prevValue = prevValueRef.current;

    return (
        <div>
            <p>Current value: {value}</p>
            <p>Previous value: {prevValue}</p>
        </div>
    );
}

export default ValueDisplay;