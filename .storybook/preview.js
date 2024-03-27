import docJson from "generated/documentation.json";
import { setCompodocJson } from "@storybook/addon-docs/angular";

setCompodocJson(docJson);

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
