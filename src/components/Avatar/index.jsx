import React from 'react';

import './index.styl';

const Avatar = ({ name, profilePic = null, size = 'small' }) => {
  const colors = [
    '#00AA55',
    '#009FD4',
    '#B381B3',
    '#939393',
    '#D47500',
    '#DC2A2A',
    '#0F2347',
    '#1C3F6E',
    '#2E67A0',
    '#5AACCF',
    '#EFFC93',
    '#80C271',
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#80B300',
    '#809900',
    '#6680B3',
    '#66991A',
    '#FF99E6',
    '#CCFF1A',
    '#FF1A66',
    '#E6331A',
    '#33FFCC',
    '#66994D',
    '#B366CC',
    '#4D8000',
    '#B33300',
    '#CC80CC',
    '#66664D',
    '#991AFF',
    '#E666FF',
    '#4DB3FF',
    '#1AB399',
    '#E666B3',
    '#33991A',
    '#CC9999',
    '#00E680',
    '#4D8066',
    '#E6FF80',
    '#999933',
    '#FF3380',
    '#CCCC00',
    '#66E64D',
    '#4D80CC',
    '#9900B3',
    '#E64D66',
    '#4DB380',
    '#FF4D4D',
    '#99E6E6',
    '#6666FF',
  ];

  const getLetters = () => {
    if (name) {
      return name
        .split(' ')
        .map(item => item.charAt(0))
        .slice(0, 2)
        .join('');
    } return '';
  };

  const numberFromText = (text) => {
    const charCodes = text
      .split('')
      .map(char => char.charCodeAt(0))
      .join('');
    return parseInt(charCodes, 10);
  };

  const letters = getLetters();
  const bgColor = name ? colors[numberFromText(letters) % colors.length] : '#eee';
  const className = `Avatar ${size}`;

  return (
    <>
      <div className={className} style={{ backgroundColor: `${bgColor}` }}>
        {profilePic ? (
          <img alt={name} src={profilePic} />
        ) : (
          <span>{letters}</span>
        )}
      </div>
    </>
  );
};
export default Avatar;
