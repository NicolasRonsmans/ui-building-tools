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
      this.directory(this.sourceRoot(), this.destinationRoot());
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'),
        {
          userName: this.props.userName
        }
      );
    }
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
