import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsSlide extends Schema.Component {
  collectionName: 'components_components_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Component<'components.button', true>;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsSection extends Schema.Component {
  collectionName: 'components_components_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    button: Attribute.Component<'components.button', true>;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String;
    class: Attribute.String;
    target: Attribute.String;
  };
}

export interface BlocksSection extends Schema.Component {
  collectionName: 'components_blocks_sections';
  info: {
    displayName: 'section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    section: Attribute.Component<'components.section'>;
  };
}

export interface BlocksBanner extends Schema.Component {
  collectionName: 'components_blocks_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    slide: Attribute.Component<'components.slide', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.slide': ComponentsSlide;
      'components.section': ComponentsSection;
      'components.button': ComponentsButton;
      'blocks.section': BlocksSection;
      'blocks.banner': BlocksBanner;
    }
  }
}
