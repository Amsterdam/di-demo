import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { IIrmaServerConfig, getConfig } from '@services/createIrmaSession';
import { Select } from '@datapunt/asc-ui';

interface IProps {
    credentialSource: string;
    setCredentialSource(value: CredentialSource): unknown;
}

export enum CredentialSource {
    DEMO = 'demo',
    PRODUCTION = 'productie'
}

const CredentialSelector: React.FC<IProps> = ({ credentialSource, setCredentialSource }) => {
    const [config, setConfig] = useState<IIrmaServerConfig | null>(null);

    useEffect(() => {
        (async () => {
            setConfig(await getConfig());
        })();
    }, []);

    const onChange = useCallback(
        event => {
            if (setCredentialSource) {
                setCredentialSource(event.target.value);
            }
        },
        [setCredentialSource]
    );

    if (config && config.environment !== 'production') {
        return (
            <Container>
                <Select label="Laad attributen van:" onChange={onChange} value={credentialSource}>
                    <option value={CredentialSource.DEMO}>{CredentialSource.DEMO}</option>
                    <option value={CredentialSource.PRODUCTION}>{CredentialSource.PRODUCTION}</option>
                </Select>
            </Container>
        );
    } else {
        return null;
    }
};

const Container = styled.div`
    max-width: 300px;
`;

export default CredentialSelector;
