import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import IrmaSessionModal from '@components/IrmaSessionModal/IrmaSessionModal';
import createIrmaSession from '@services/createIrmaSession';

export interface IIrmaSessionInputData {
    demoPath: string;
    useDemoCredentials: boolean;
    resultCallback: (irmaSessionResult: any) => void;
}

export interface IIrmaSessionOutputData {
    modal: JSX.Element | undefined;
    startIrmaSession: (irmaSessionInputData: IIrmaSessionInputData) => void;
}

const useIrmaSession = (): any => {
    const [showLogo, setShowLogo] = useState<boolean>(false);
    const [activeIrmaSessionData, setActiveIrmaSessionData] = useState<IIrmaSessionInputData | undefined>();

    // Create a trigger function that opens the modal with session data and wait for it to be rendered
    const startIrmaSession = (irmaSessionInputData: IIrmaSessionInputData) => {
        setActiveIrmaSessionData(irmaSessionInputData);
    };

    // Define callback to manually close modal
    const closeModal = useCallback(() => {
        setActiveIrmaSessionData(undefined);
        setShowLogo(false);
    }, []);

    // // Init trigger to start session (after modal has mounted)
    useLayoutEffect(() => {
        if (activeIrmaSessionData === undefined) {
            return;
        }

        // Define the callback mapping that triggers functions on IRMA state changes
        const callBackMapping = {
            ShowingQRCode: () => {
                setShowLogo(true);
            },
            rest: () => {
                setShowLogo(false);
            }
        };

        // Run the actual IRMA session and fetch the result
        const startIrmaSession = async (): Promise<any> => {
            const result: any = await createIrmaSession(
                activeIrmaSessionData.demoPath,
                'irma-qr',
                { demo: activeIrmaSessionData.useDemoCredentials },
                callBackMapping
            );
            activeIrmaSessionData.resultCallback(result);
            closeModal();
        };
        startIrmaSession();
    }, [activeIrmaSessionData, closeModal]);

    const modalElement = (
        <IrmaSessionModal showModal={activeIrmaSessionData !== undefined} showLogo={showLogo} closeModal={closeModal} />
    );

    const irmaSessionOutputData: IIrmaSessionOutputData = { modal: modalElement, startIrmaSession };
    return irmaSessionOutputData;
};

export default useIrmaSession;