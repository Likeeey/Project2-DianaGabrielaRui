import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

function Share() {
    return (
        <div>
          <FacebookShareButton
            url={'https://www.example.com'} //not finished
            quote={'Dummy text!'}
            hashtag="#muo"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      );

}

export default Share;
