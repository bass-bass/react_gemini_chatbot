import React, { ReactElement } from 'react';

import './CustomBotAvatar.css';

export type CustomBotAvatarProps = {
    imgSrc: string;
};

export const CustomBotAvator = (props: CustomBotAvatarProps): ReactElement => {
  return (
    <img className="bot-avatar" src={props.imgSrc} alt="" />
  );
};
