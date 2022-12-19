import React, {useContext} from 'react';

//Import Icons
import {Im500Px, ImTwitter, ImWhatsapp, ImTelegram, ImSkype} from 'react-icons/im';

//Import Circle Context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
  <div 
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="https://500px.com/" target='_blank'>
          <Im500Px />
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com" target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href="https://www.whatsapp.com/" target='_blank'>
          <ImWhatsapp />
        </a>
      </li>
      <li>
        <a href="https://telegram.org/" target='_blank'>
          <ImTelegram />
        </a>
      </li>
      <li>
        <a href="https://www.skype.com/en/" target='_blank'>
          <ImSkype />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Socials;