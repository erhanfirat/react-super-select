import React from 'react';

interface SuperSelectProps {
    filter: boolean;
    multipleSelect: boolean;
}
declare const SuperSelect: (props: SuperSelectProps) => React.JSX.Element;

export { SuperSelect as default };
