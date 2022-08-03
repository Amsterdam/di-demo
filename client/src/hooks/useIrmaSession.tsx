import React, { useCallback, useLayoutEffect, useState } from 'react';
import IrmaSessionModal from '@components/IrmaSessionModal/IrmaSessionModal';
import createIrmaSession, { isMobile } from '@services/createIrmaSession';
import { useCurrentLanguage } from '@services/ContentProvider';

interface IIrmaSessionInputData {
    demoPath: string;
    useDemoCredentials: boolean;
    resultCallback: (irmaSessionResult: any) => void;
    extraQuery?: { [key: string]: string };
    alwaysShowQRCode?: boolean;
    irmaQrId: string;
}

export interface IIrmaSessionOutputData {
    modal: JSX.Element | undefined;
    url: string | undefined;
    showModal: () => void;
    startIrmaSession: (activeIrmaSessionDataInput?: IIrmaSessionInputData) => void;
}

const useIrmaSession = (activeIrmaSessionDataInput?: IIrmaSessionInputData): IIrmaSessionOutputData => {
    const [QRIsShowing, setQRIsShowing] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const [activeIrmaSessionData, setActiveIrmaSessionData] = useState<IIrmaSessionInputData | undefined>(
        activeIrmaSessionDataInput
    );
    const [url, setUrl] = useState<string>();
    const [deferStart, setDeferStart] = useState<boolean>(activeIrmaSessionDataInput === undefined);
    const language = useCurrentLanguage();

    // Define callback to manually close modal
    const closeModal = useCallback(() => {
        setQRIsShowing(false);
        setActiveIrmaSessionData(undefined);
        setShowModal(false);
    }, []);

    // // Init trigger to start session (after modal has mounted)
    useLayoutEffect(() => {
        if (activeIrmaSessionData === undefined) {
            return;
        }

        // Define the callback mapping that triggers functions on IRMA state changes
        const callBackMapping = {
            ShowingQRCode: (payload: { mobile: string }) => {
                if (isMobile() && activeIrmaSessionData?.alwaysShowQRCode !== true) {
                    setUrl(payload?.mobile ?? '');
                } else {
                    setQRIsShowing(true);
                }
            },
            ShowingQRCodeInstead: () => {
                setQRIsShowing(true);
            },
            ShowingIrmaButton: (payload: { mobile: string }) => {
                setUrl(payload?.mobile ?? '');
                if (isMobile() && activeIrmaSessionData?.alwaysShowQRCode !== true) {
                    closeModal();
                }
            },
            rest: () => {
                setQRIsShowing(false);
            }
        };

        // Run the actual IRMA session and fetch the result
        const startIrmaSession = async (): Promise<any> => {
            console.log('startIrmaSession', activeIrmaSessionData);
            const result: any = await createIrmaSession(
                activeIrmaSessionData.demoPath,
                activeIrmaSessionData?.irmaQrId || 'irma-qr',
                { demo: activeIrmaSessionData.useDemoCredentials, ...activeIrmaSessionData.extraQuery },
                callBackMapping,
                activeIrmaSessionData.alwaysShowQRCode,
                language
            );

            activeIrmaSessionData.resultCallback(result);
            closeModal();
        };
        if (!deferStart) {
            startIrmaSession();
        }
    }, [activeIrmaSessionData, closeModal, language]);

    const modalElement = isMobile() ? (
        <div id={activeIrmaSessionDataInput?.irmaQrId} style={{ display: 'none' }}></div>
    ) : (
        <div style={{ display: showModal ? 'block' : 'none' }}>
            <IrmaSessionModal
                showModal={true}
                QRIsShowing={QRIsShowing}
                closeModal={closeModal}
                irmaQrId={activeIrmaSessionDataInput?.irmaQrId || 'irma-qr'}
                // Make the modal invisible for mobile flow unless alwaysShowQRCode is explicitly set
                hideForMobileFlow={!showModal}
            />
        </div>
    );

    const irmaSessionOutputData: IIrmaSessionOutputData = {
        modal: modalElement,
        url,
        showModal: () => {
            setShowModal(true);
        },
        startIrmaSession: activeIrmaSessionDataInput => {
            if (activeIrmaSessionDataInput !== undefined) {
                setActiveIrmaSessionData(activeIrmaSessionDataInput);
            }

            setDeferStart(false);
        }
    };
    return irmaSessionOutputData;
};

export default useIrmaSession;
