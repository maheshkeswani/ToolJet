export const formConfig = {
  name: 'Form',
  displayName: 'Form',
  description: 'Wrapper for multiple components',
  defaultSize: {
    width: 13,
    height: 330,
  },
  defaultChildren: [
    {
      componentName: 'Text',
      layout: {
        top: 40,
        left: 10,
        height: 30,
        width: 17,
      },
      properties: ['text'],
      styles: [
        'textSize',
        'fontWeight',
        'fontStyle',
        'textColor',
        'isScrollRequired',
        'lineHeight',
        'textIndent',
        'textAlign',
        'verticalAlignment',
        'decoration',
        'transformation',
        'letterSpacing',
        'wordSpacing',
        'fontVariant',
        'backgroundColor',
        'borderColor',
        'borderRadius',
        'boxShadow',
        'padding',
      ],
      defaultValue: {
        text: 'User Details',
        fontWeight: 'bold',
        textSize: 18,
        textColor: '#000',
        backgroundColor: '#fff00000',
        textAlign: 'left',
        decoration: 'none',
        transformation: 'none',
        fontStyle: 'normal',
        lineHeight: 1.5,
        textIndent: '0',
        letterSpacing: '0',
        wordSpacing: '0',
        fontVariant: 'normal',
        verticalAlignment: 'top',
        padding: 'default',
        boxShadow: '0px 0px 0px 0px #00000090',
        borderRadius: '0',
        isScrollRequired: 'enabled',
      },
    },
    {
      componentName: 'Text',
      layout: {
        top: 90,
        left: 10,
        height: 30,
      },
      properties: ['text'],
      styles: [
        'textSize',
        'fontWeight',
        'fontStyle',
        'textColor',
        'isScrollRequired',
        'lineHeight',
        'textIndent',
        'textAlign',
        'verticalAlignment',
        'decoration',
        'transformation',
        'letterSpacing',
        'wordSpacing',
        'fontVariant',
        'backgroundColor',
        'borderColor',
        'borderRadius',
        'boxShadow',
        'padding',
      ],
      defaultValue: {
        text: 'Name',
        fontWeight: 'normal',
        textSize: 14,
        textColor: '#000',
        backgroundColor: '#fff00000',
        textAlign: 'left',
        decoration: 'none',
        transformation: 'none',
        fontStyle: 'normal',
        lineHeight: 1.5,
        textIndent: '0',
        letterSpacing: '0',
        wordSpacing: '0',
        fontVariant: 'normal',
        verticalAlignment: 'top',
        padding: 'default',
        boxShadow: '0px 0px 0px 0px #00000090',
        borderRadius: '0',
        isScrollRequired: 'enabled',
      },
    },
    {
      componentName: 'Text',
      layout: {
        top: 160,
        left: 10,
        height: 30,
      },
      properties: ['text'],
      styles: [
        'textSize',
        'fontWeight',
        'fontStyle',
        'textColor',
        'isScrollRequired',
        'lineHeight',
        'textIndent',
        'textAlign',
        'verticalAlignment',
        'decoration',
        'transformation',
        'letterSpacing',
        'wordSpacing',
        'fontVariant',
        'backgroundColor',
        'borderColor',
        'borderRadius',
        'boxShadow',
        'padding',
      ],
      defaultValue: {
        text: 'Age',
        fontWeight: 'normal',
        textSize: 14,
        textColor: '#000',
        backgroundColor: '#fff00000',
        textAlign: 'left',
        decoration: 'none',
        transformation: 'none',
        fontStyle: 'normal',
        lineHeight: 1.5,
        textIndent: '0',
        letterSpacing: '0',
        wordSpacing: '0',
        fontVariant: 'normal',
        verticalAlignment: 'top',
        padding: 'default',
        boxShadow: '0px 0px 0px 0px #00000090',
        borderRadius: '0',
        isScrollRequired: 'enabled',
      },
    },
    {
      componentName: 'TextInput',
      layout: {
        top: 120,
        left: 10,
        height: 30,
        width: 25,
      },
      properties: ['placeholder', 'label'],
      defaultValue: {
        placeholder: 'Enter your name',
        label: '',
      },
    },
    {
      componentName: 'NumberInput',
      layout: {
        top: 190,
        left: 10,
        height: 30,
        width: 25,
      },
      properties: ['value', 'label'],
      defaultValue: {
        value: 24,
        label: '',
      },
    },
    {
      componentName: 'Button',
      layout: {
        top: 240,
        left: 10,
        height: 30,
        width: 10,
      },
      properties: ['text'],
      defaultValue: {
        text: 'Submit',
      },
    },
  ],
  component: 'Form',
  others: {
    showOnDesktop: { type: 'toggle', displayName: 'Show on desktop' },
    showOnMobile: { type: 'toggle', displayName: 'Show on mobile' },
  },
  properties: {
    buttonToSubmit: {
      type: 'select',
      displayName: 'Button to submit form',
      options: [{ name: 'None', value: 'none' }],
      validation: {
        schema: { type: 'string' },
        defaultValue: 'none',
      },
      conditionallyRender: {
        key: 'advanced',
        value: false,
      },
    },
    loadingState: {
      type: 'toggle',
      displayName: 'Loading state',
      section: 'additionalActions',
      validation: {
        schema: { type: 'boolean' },
        defaultValue: false,
      },
    },
    visibility: {
      type: 'toggle',
      displayName: 'Visibility',
      section: 'additionalActions',
      validation: {
        schema: { type: 'boolean' },
        defaultValue: true,
      },
    },
    disabledState: {
      type: 'toggle',
      displayName: 'Disable',
      section: 'additionalActions',
      validation: {
        schema: { type: 'boolean' },
        defaultValue: false,
      },
    },
    advanced: {
      type: 'toggle',
      displayName: ' Use custom schema',
    },
    JSONSchema: {
      type: 'code',
      displayName: 'JSON Schema',
      conditionallyRender: {
        key: 'advanced',
        value: true,
      },
    },
  },
  events: {
    onSubmit: { displayName: 'On submit' },
    onInvalid: { displayName: 'On invalid' },
  },
  styles: {
    backgroundColor: {
      type: 'color',
      displayName: 'Background color',
      validation: {
        schema: { type: 'string' },
      },
    },
    borderRadius: {
      type: 'code',
      displayName: 'Border radius',
      validation: {
        schema: {
          type: 'union',
          schemas: [{ type: 'string' }, { type: 'number' }],
        },
        defaultValue: 0,
      },
    },
    borderColor: {
      type: 'color',
      displayName: 'Border color',
      validation: {
        schema: { type: 'string' },
        defaultValue: '#fff',
      },
    },
  },
  exposedVariables: {
    data: {},
    isValid: true,
    isVisible: true,
    isDisabled: false,
    isLoading: false,
  },
  actions: [
    {
      handle: 'submitForm',
      displayName: 'Submit Form',
    },
    {
      handle: 'resetForm',
      displayName: 'Reset Form',
    },
    {
      handle: 'setVisibility',
      displayName: 'Set visibility',
      params: [{ handle: 'disable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
    },
    {
      handle: 'setDisable',
      displayName: 'Set disable',
      params: [{ handle: 'setDisable', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
    },
    {
      handle: 'setLoading',
      displayName: 'Set loading',
      params: [{ handle: 'setLoading', displayName: 'Value', defaultValue: '{{false}}', type: 'toggle' }],
    },
  ],
  definition: {
    others: {
      showOnDesktop: { value: '{{true}}' },
      showOnMobile: { value: '{{false}}' },
    },
    properties: {
      loadingState: { value: `{{false}}` },
      visibility: { value: '{{true}}' },
      disabledState: { value: '{{false}}' },
      advanced: { value: '{{false}}' },
      JSONSchema: {
        value:
          "{{ {title: 'User registration form', properties: {firstname: {type: 'textinput',value: 'Maria',label:'First name', validation:{maxLength:6}, styles: {backgroundColor: '#f6f5ff',textColor: 'black'},},lastname:{type: 'textinput',value: 'Doe', label:'Last name', styles: {backgroundColor: '#f6f5ff',textColor: 'black'},},age:{type:'number', label:'Age'},}, submitButton: {value: 'Submit', styles: {backgroundColor: '#3a433b',borderColor:'#595959'}}} }}",
      },
    },
    events: [],
    styles: {
      backgroundColor: { value: '#fff' },
      borderRadius: { value: '0' },
      borderColor: { value: '#fff' },
    },
  },
};
