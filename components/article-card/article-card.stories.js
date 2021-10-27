// A story captures the rendered state of a UI component. It's a function that returns a component's state given a set of arguments
// args => React's props
// stories are defined in a story file (.stories) that lives alongside the components file
// story file is for development only and won't be included in the production bundle
// Component Story Format (CSF) => default export that describes the component and named exports that describe the stories

import React from 'react';
import ArticleCard from './article-card';
import { storiesOf } from '@storybook/react';

// Default export
export default {
    title: 'Components/ArticleCard',
    component: ArticleCard
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <ArticleCard
    title="This is the title of the article"
    imageSource="https://cineville-media.imgix.net/magazine/cineville-cuisine-an/Dorayaki-a-la-An_artikel-header.jpg?w=1200"
    editorialSection="Here is the section title"
/>;


export const Default = Template.bind({});