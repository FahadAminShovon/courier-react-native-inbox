import type {
  BrandConfig,
  Colors,
  EmptyState,
  WidgetBackground,
  Inapp,
} from './brands.types';

const colors: Colors = {
  primary: '#FF9800', // Orange color
  secondary: '#03A9F4', // Light blue color
  tertiary: '#FFC107', // Amber color
  __typename: 'ColorConfig',
};

const emptyState: EmptyState = {
  textColor: '#FFF', // White text color
  text: 'No messages', // Example empty state text
  __typename: 'EmptyStateConfig',
};

const widgetBackground: WidgetBackground = {
  topColor: '#333', // Dark gray
  bottomColor: '#444', // Slightly lighter dark gray
  __typename: 'BackgroundConfig',
};

const inapp: Inapp = {
  borderRadius: '8px', // Example border radius
  disableMessageIcon: false, // Example boolean value
  disableCourierFooter: false, // Example nullable boolean value
  placement: 'bottom-right', // Example placement
  emptyState,
  widgetBackground,
  __typename: 'InAppConfig',
};

export const brandInitialConfig: BrandConfig = {
  colors,
  inapp,
  preferenceTemplates: [],
};
