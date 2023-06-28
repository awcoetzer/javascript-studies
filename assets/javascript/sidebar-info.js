'use strict';

const developerInfo = {
  username: 'Andre W. Coetzer',
  github: 'https://github.com/awcoetzer',
  profileImage: 'https://avatars.githubusercontent.com/u/83278375?v=4',
  profileImageAlt: 'The is the same image the developer uses on their GitHub profile. It\'s an image of space, with a blue tint',
  job: 'Frontend Engineer',
  socialLinks: [
    {
      iconName: 'logo-github',
      socialLink: 'https://github.com/awcoetzer'
    },
    {
      iconName: 'logo-twitter',
      socialLink: 'https://twitter.com/awcoetzer'
    },
    {
      iconName: 'logo-linkedin',
      socialLink: 'https://www.linkedin.com/in/andre-coetzer-9b4184273/'
    }
  ]
}

const modulesInfo = [
  {
    moduleVer: 1,
    title: 'Welcome',
    modulePath: './index.html',
    subList: [
      {
        subTitle: 'Course Structure & Projects',
        subPath: `#lesson-1`
      },
      {
        subTitle: 'Read before you start',
        subPath: `#lesson-2`
      },
      {
        subTitle: 'Watch before you start',
        subPath: `#lesson-3`
      },
      {
        subTitle: 'Setting up our code editor',
        subPath: `#lesson-4`
      },
    ]
  },
  {
    moduleVer: 2,
    title: 'JavaScript Fundamentals Part One',
    modulePath: './fundamentals-part-one.html',
    subList: [
      {
        subTitle: 'Linking a Javascript file',
        subPath: `#lesson-5`,
      },
      {
        subTitle: 'Values and Variables',
        subPath: `#lesson-6`,
      },
      {
        subTitle: 'Data types',
        subPath: `#lesson-7`,
      },
      {
        subTitle: 'let, const & var',
        subPath: `#lesson-8`,
      },
      {
        subTitle: 'Basic Operators',
        subPath: `#lesson-9`,
      },
      {
        subTitle: 'Operator Precedence',
        subPath: `#lesson-10`,
      },
      {
        subTitle: 'Strings & Template Literals',
        subPath: `#lesson-11`,
      },
      {
        subTitle: 'Taking Decisions: if / else Statements',
        subPath: `#lesson-12`,
      },
      {
        subTitle: 'Type Conversion & Coercion',
        subPath: `#lesson-13`,
      },
      {
        subTitle: 'Truthy & Falsy Values',
        subPath: `#lesson-14`,
      },
      {
        subTitle: 'Equality operators',
        subPath: `#lesson-15`,
      },
      {
        subTitle: 'Boolean Logic',
        subPath: `#lesson-16`,
      },
      {
        subTitle: 'Logical Operators',
        subPath: `#lesson-17`,
      },
      {
        subTitle: 'The Switch Statement',
        subPath: `#lesson-18`,
      },
      {
        subTitle: 'Statements & Expressions',
        subPath: `#lesson-19`,
      },
      {
        subTitle: 'The conditional (ternary) operator',
        subPath: `#lesson-20`,
      },
    ]
  }
]

export { developerInfo, modulesInfo }