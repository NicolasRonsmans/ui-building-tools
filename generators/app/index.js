'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('UI Building Tools exercise') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'userName',
      message: 'What\'s your name?',
      default: 'Anonymous'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    all: function () {
      this.directory(this.sourceRoot() + '/_css', this.destinationRoot() + '/css');
      this.directory(this.sourceRoot() + '/_js', this.destinationRoot() + '/js');
      this.directory(this.sourceRoot() + '/_tests', this.destinationRoot() + '/tests');
      this.fs.copyTpl(this.templatePath('_index.html'), this.destinationPath('index.html'), {
        userName: this.props.userName
      });
      this.copy('_package.json', 'package.json');
      this.copy('_Gruntfile.js', 'Gruntfile.js');
      this.copy('gitignore', '.gitignore');
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
      this.copy('csslintrc', '.csslintrc');
    }
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
