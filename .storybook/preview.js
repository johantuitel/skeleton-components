import docJson from "generated/documentation.json";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { themeDecorator } from '../projects/skeleton-components/src/lib/storybook/decorators/theme-decorator';

setCompodocJson(docJson);

export const decorators = [
  themeDecorator
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global Theme for components',
    defaultValue: 'no-theme',
    toolbar: {
      icon: 'sun',
      items: [
        {value: 'no-theme', title: 'None'},
        {value: 'skeleton-light', title: 'Skeleton Light'},
        {value: 'skeleton-dark', title: 'Skeleton Dark'}
      ],
      dynamicTitle: true,
      showName: true
    }
  }
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    story: {
      inline: true
    }
  }
}
