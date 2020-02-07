import React from 'react';
import facebookImg from '../images/facebookIcon.png';
import twitterImg from '../images/twitter.png';
import githubImg from '../images/github.png';
import linkedinImg from '../images/linkedin.png';
import '../styles/components/SocialItem.styl';

const SocialItem = (props) => {
  console.log(props);
  let image,
    text;
  text = props.name;
  switch (props.name) {
    case 'facebook':
      image = facebookImg;
      text = 'Facebook';
      break;
    case 'twitter':
      image = twitterImg;
      text = 'Twitter';
      break;
    case 'github':
      image = githubImg;
      text = 'Github';
      break;
    case 'linkedin':
      image = linkedinImg;
      text = 'LinkedIn';
      break;        
    default:
      console.log('ninguna');
      break;
  }

  return (
    <div className='Header-social'>
      <a href={props.url} target="_blank">
        {image && <img src={image}  />}
        {'  '}
        { text }
      </a>
    </div>
  );
};
export default SocialItem;
