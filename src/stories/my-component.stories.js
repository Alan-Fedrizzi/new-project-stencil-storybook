import { html } from 'lit-html';

export default {
  title: 'Components/My Component',
};

const Template = () => {
  return html`
    <style></style>
    <div>
      <my-component>cccccccccc</my-component>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {};
