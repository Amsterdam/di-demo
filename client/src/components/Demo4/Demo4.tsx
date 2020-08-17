import React, { useState, useEffect, useRef, useReducer } from 'react';
import createIrmaSession from '@services/createIrmaSession';
import styled from 'styled-components';
import content from '@services/content';
import ReactMarkDown from 'react-markdown';
import * as AscLocal from '@components/LocalAsc/LocalAsc';
import { Accordion, Paragraph, themeColor, themeSpacing, ErrorMessage } from '@datapunt/asc-ui';
import { Checkmark } from '@datapunt/asc-assets';
import CredentialSelector, { CredentialSource } from '@components/CredentialSelector/CredentialSelector';
import ExternalLink from '@components/ExternalLink/ExternalLink';
import PageTemplate from '@components/PageTemplate/PageTemplate';
import BreadCrumbs from '@components/BreadCrumbs';
import DemoNotification from '@components/DemoNotification/DemoNotification';
import HeaderImage, { IHeaderImageProps } from '@components/HeaderImage/HeaderImage';
import { RadioGroup, Label, Radio } from '@datapunt/asc-ui';
import QRCode from '@components/QRCode/QRCode';
import reducer from './reducer';


export interface IProps { };

interface IState {
  hasResult?: boolean;
  hasError?: boolean;
  formValid?: boolean;
  name?: string;
  street?: string;
  city?: string;
  telephone?: string;
  email?: string;
}

const initialState: IState = {
  hasResult: false,
  hasError: false,
  formValid: true,
  name: 'jgs',
  street: 'ma 650',
  city: 'asd',
  telephone: '065',
  email: ''
};

const Demo4: React.FC<IProps> = () => {
  const formEl = useRef(null);

  const [credentialSource, setCredentialSource] = useState(CredentialSource.PRODUCTION);
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateForm = () => {
    const el = formEl.current.querySelector('input[name=geveltuin]:checked');
    if (el) {
      // form was filled in
      const value = el.getAttribute('value');
      dispatch({
        type: 'validateForm',
        payload: {
          owner: el.getAttribute('value')
        }
      });
      return true;
    }

    dispatch({
      type: 'invalidateForm'
    });
    return false;
  };

  const getSession = async () => {
    if (validateForm()) {
      const response = await createIrmaSession('demo4', 'irma-qr', credentialSource === CredentialSource.DEMO);
      const newState: IState = { ...initialState };

      dispatch({
        type: 'setProperties',
        payload: {
          name: response['fullname'],
          street: `${response['street']} ${response['houseNumber']}`,
          city: `${response['zipcode']} ${response['city']}`,
          telephone: response['mobilenumber']
        }
      });

      window.scrollTo(0, 0);
    }
  };

  const [headerImg, setHeaderImg] = useState<IHeaderImageProps>({
    filename: content.images.demo4.header.src,
    alt: content.images.demo4.header.alt
  });

  const { hasResult, hasError, name, street, city, telephone, formValid, owner } = state;

  function replaceVars(str, p1, offset, s) {
    return state[p1];
  }

  // Update header image
  useEffect(() => {
    if (hasResult) {
      setHeaderImg({
        filename: content.images.demo4.headerResult.src,
        alt: content.images.demo4.headerResult.alt
      });
    }
  }, [hasResult]);

  return (
    <PageTemplate>
      <CredentialSelector credentialSource={credentialSource} setCredentialSource={setCredentialSource} />

      {hasResult ? 'yes' : 'no'} {name} {street} {city} {telephone} {owner}

      <ReactMarkDown
        source={content.demo4.breadcrumbs}
        renderers={{ list: BreadCrumbs, listItem: BreadCrumbs.Item }}
      />

      {!hasResult && <DemoNotification />}

      {hasResult && (
        <AscLocal.Alert
          color={AscLocal.AlertColor.SUCCESS}
          icon={<Checkmark />}
          heading={content.demo4.proven.alert.title}
          content={content.demo4.proven.alert.body}
        />
      )}

      <ReactMarkDown
        source={content.demo4[hasResult ? 'proven' : 'unproven'].title}
        renderers={{ heading: AscLocal.H1 }}
      />

      <HeaderImage filename={headerImg.filename} alt={headerImg.alt} />

      {!hasResult ? (
        <>
          <ReactMarkDown
            source={content.demo4.unproven.intro1}
            renderers={{ heading: AscLocal.H2, paragraph: AscLocal.Paragraph, list: AscLocal.UL }}
          />

          <AscLocal.AccordionContainer>
            <Accordion title={content.demo4.unproven.why.title}>
              <ReactMarkDown
                source={content.demo4.unproven.why.body}
                renderers={{ paragraph: AscLocal.Paragraph, list: AscLocal.UL }}
              />
            </Accordion>
          </AscLocal.AccordionContainer>

          <AscLocal.H2>Demo-aanvraag Geveltuin</AscLocal.H2>
          <form ref={formEl} >
            <ReactMarkDown source={content.demo4.form.owner} renderers={{ paragraph: AscLocal.Paragraph }} />

            <RadioGroup name="geveltuin" error={!formValid}>
              <Label htmlFor="yes" label="Ja" >
                <Radio id="yes" variant="primary" value="Ja" />
              </Label>
              <Label htmlFor="no" label="Nee" >
                <Radio id="no" variant="primary" value="Nee" />
              </Label>
            </RadioGroup>
            {!formValid && <ErrorMessage message={content.demo4.form.required} />}
          </form>

          <ReactMarkDown
            source={content.demo4.unproven.intro2}
            renderers={{ heading: AscLocal.H2, paragraph: AscLocal.Paragraph, list: AscLocal.UL }}
          />

          <QRCode getSession={getSession} label={content.demo4.button} />

          <ReactMarkDown
            source={content.downloadIrma}
            renderers={{ paragraph: AscLocal.Paragraph, link: ExternalLink }}
          />
        </>
      ) : (
          <>
            <AscLocal.GreyContainer>
              <ReactMarkDown source={content.demo4.result.uwDemoAanvraag} renderers={{ heading: AscLocal.H3, paragraph: AscLocal.Paragraph, list: AscLocal.UL }} />
            </AscLocal.GreyContainer>

            <AscLocal.GreyContainer>
              <ReactMarkDown source={content.demo4.result.uwGegevens.replace(/\{(.*?)\}/gm, replaceVars)} renderers={{ heading: AscLocal.H3, paragraph: AscLocal.Paragraph, list: AscLocal.UL }} />
            </AscLocal.GreyContainer>

            <ReactMarkDown source={content.demo4.result.rest} renderers={{ heading: AscLocal.H2, paragraph: AscLocal.Paragraph, list: AscLocal.UL }} />

            <ReactMarkDown source={content.callToAction} />
          </>
        )
      }
    </PageTemplate >
  );
};


export default Demo4;