module.exports = (plop) => {
  plop.setGenerator('create-component', {
    description: 'This will create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's the name of this component?",
        validate(value) {
          if ((/.+/).test(value)) {
            return true;
          }

          return 'name is required';
        }
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where should it go? (dir)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{dir}}/{{properCase name}}/index.js',
        templateFile: 'plop_templates/js_template.txt'
      },
      {
        type: 'add',
        path: '{{dir}}/{{properCase name}}/{{snakeCase name}}.module.scss',
        templateFile: 'plop_templates/scss_template.txt'
      },
      {
        type: 'add',
        path: '{{dir}}/{{properCase name}}/__tests__/{{snakeCase name}}.spec.js',
        templateFile: 'plop_templates/test_template.txt'
      }
    ]
  });
};
