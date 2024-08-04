import type { Schema, Attribute } from '@strapi/strapi';

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

export interface ComponentsSlide extends Schema.Component {
  collectionName: 'components_components_slides';
  info: {
    displayName: 'slide';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    buttons: Attribute.Component<'components.button', true>;
    image: Attribute.Media<'images'>;
    leading: Attribute.String;
    subtitle: Attribute.String;
    floating_image: Attribute.Boolean & Attribute.DefaultTo<false>;
    class: Attribute.String;
  };
}

export interface ComponentsSection extends Schema.Component {
  collectionName: 'components_components_sections';
  info: {
    displayName: 'section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    buttons: Attribute.Component<'components.button', true>;
    subtitle: Attribute.String;
    content: Attribute.Blocks;
    class: Attribute.String;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String;
    class: Attribute.String;
    target: Attribute.String;
    file: Attribute.Media<'files'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.section': BlocksSection;
      'blocks.banner': BlocksBanner;
      'components.slide': ComponentsSlide;
      'components.section': ComponentsSection;
      'components.button': ComponentsButton;
    }
  }
}
