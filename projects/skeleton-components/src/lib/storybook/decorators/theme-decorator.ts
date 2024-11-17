import { StoryContext } from "@storybook/angular";
import { Renderer, PartialStoryFn as StoryFunction } from '@storybook/types';

const getOrCreateLink = (id: string): HTMLLinkElement => {
    const foundStylesheetElement: HTMLElement | null = document.getElementById(id);

    if (foundStylesheetElement) {
        return foundStylesheetElement as HTMLLinkElement;
    }

    const stylesheetElement = document.createElement('link');

    stylesheetElement.setAttribute('id', id);
    stylesheetElement.setAttribute('rel', 'stylesheet')

    document.head.appendChild(stylesheetElement);

    return stylesheetElement;
}

const deleteLink = (id: string): void => {
    const foundStylesheetElement: HTMLElement | null = document.getElementById(id);

    if (foundStylesheetElement) {
        foundStylesheetElement.remove();
    }
}

export const themeDecorator = (storyFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
    const theme = context.globals['theme'] || 'no-theme';

    if (theme === 'no-theme') {
        deleteLink('theme-stylesheet');
    } else {
        const link = getOrCreateLink('theme-stylesheet');
        link.href = `assets/08-themes/${theme}.css`;
    }
    
    return storyFn();
}