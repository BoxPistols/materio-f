/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'tags',
    {
      type: 'category',
      label: 'Authentication',
      items: ['authentication/intro', 'authentication/credentials-provider', 'authentication/google-prisma', 'authentication/remove-auth', 'authentication/add-auth']
    },
    'content-scroll-lock',
    'translation',
    'custom-inputs',
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [{ type: 'autogenerated', dirName: 'tutorial-basics' }]
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [{ type: 'autogenerated', dirName: 'tutorial-extras' }]
    },
  ],
  componentSidebar: [
    'components/accordion',
    'components/alerts',
    'components/avatars',
    'components/badges',
    'components/buttons',
    'components/button-group',
    'components/chips',
    'components/dialogs',
    'components/list',
    'components/menu',
    'components/pagination',
    'components/progress',
    'components/ratings',
    'components/snackbar',
    'components/swiper',
    'components/tabs',
    'components/timeline',
    'components/toasts',
    'components/tree-view',
    'components/more',
    'components/test',
  ],
  formsTablesSidebar: [{
    type: 'category',
    label: 'Form Elements',
    collapsed: false,
    items: [
      'form-elements/text-field',
      'form-elements/select',
      'form-elements/checkbox',
      'form-elements/radio',
      'form-elements/custom-inputs',
      'form-elements/textarea',
      'form-elements/autocomplete',
      'form-elements/picker',
      'form-elements/switch',
      'form-elements/file-uploader',
      'form-elements/editor',
      'form-elements/slider',
      'form-elements/test',
    ]
  },
  {
    type: 'category',
    label: 'Tables',
    collapsed: false,
    items: [
      'tables/mui-table',
    ]
  }
  ],
  faqSidebar: [{ type: 'autogenerated', dirName: 'faqs' }]
};

module.exports = sidebars;
