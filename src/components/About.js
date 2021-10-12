import React from 'react';

const About = () => {
  return React.createElement(
    'div',
    { className: 'about' },
    React.createElement('a', { href: './' }, 'Tracker'),
    React.createElement('a', { href: './components.About.js' }, 'About'),
    React.createElement('br', null),
    React.createElement('h2', null, 'The About Page'),
    React.createElement(
      'p',
      null,
      "It's about guts and glory. And also how well you can use React."
    )
  );
};

export default About;
