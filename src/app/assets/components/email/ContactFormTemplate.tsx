import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone?: string;
  message: string;
}

export const ContactFormTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, phone, message
}) => (
  <div>
    <p>Nom : {name}!</p>
    <p>Numéro de téléphone : {phone} </p>

    <span>-------------------------------------------------</span>

    <p className='whitespace-pre-line mt-5'>{message}</p>

    <small>Ce mail à été envoyé depuis le portfolio de yoann piard https://yoann-piard.fr/</small>

  </div>
);