# sails-starter

a [Sails](http://sailsjs.org) application
## JavaScript code style checker

It is enforced for the coding rules for developing the  code in appropriate manner for team and makes an easier for readability for each person to understand the code.

### INSTALLING JSCS

JSCS is a simple node module to install globaly

    npm install jscs -g

you have now the JSCS tool globaly.

To check your code JSCS will need a configuration and file named should be .jscs.json after installation in your root file and this file will contain all the rules and must follow this rules.
                        Or
jscs.

#### Rules:-

There are some rules of JSCS which can be checked from this link according to need http://jscs.info/rules 
Remember rules can be mentioned according to your need.
>{ 
	"requireCurlyBraces": [ "if", "else", "for", "while", "do" ], 
	"requireSpaceAfterKeywords": [ "if", "else", "for", "while", "do", "switch", "return" ], 	"requireSpacesInFunctionExpression": { 
	"beforeOpeningCurlyBrace": true 
}, 
	"disallowSpacesInFunctionExpression":{ 
	"beforeOpeningRoundBrace":true 
	}, 
	"requireMultipleVarDecl":true, 
	"requireSpacesInsideObjectBrackets":"all",
	"requireSpacesInsideArrayBrackets":"all",
	"disallowLeftStickedOperators": [ "?", "-", "/", "*", "=", "==","===","!=", "!==", ">", ">=", "<", "<=" ], 
	"disallowRightStickedOperators": [ "?", "/", "*", ":", "=", "==", "===", "!=", "!==", ">", ">=", "<", "<=" ], 
	"requireSpaceBeforeBinaryOperators": ["+", "-", "/", "*", "=", "==", "===", "!=", "!	=="], "
	disallowSpaceAfterPrefixUnaryOperators": ["++", "--", "+", "-"], 	"disallowSpaceBeforePostfixUnaryOperators": ["++", "--"], 	"requireRightStickedOperators": [ "!" ], 
	"requireLeftStickedOperators":[","],
	"disallowKeywords":["with"],
	"disallowMultipleLineBreaks":true,
	"disallowKeywordsOnNewLine":["else"],
	"requireLineFeedAtFileEnd":true, 
	"disallowSpaceAfterObjectKeys": true,
	 "validateLineBreaks": "LF" 
}

These rules enforce curly braces after if statements, disallow the use of with, enforce Unix line ending and so on. You can found the rules list and their meaning in the JSCS Readme.

When you have finished to play with the rules, put your .jscs.json configuration file at the root of your project.

You can already check your code by typing this command at the root of your project:
#### Path:-
      jscs path/to/my/script.js



### **Integrating with Sublime-Text**
For this you will need Sublime Text 3 with Package Control.
First you will need to install SublimeLinter using Package Control (follow the SublimeLinter documentation if you are not sure about the procedure).
Then, the same way you've installed SublimeLinter, search for the package SublimeLinter-jscs in Package Control and install it.
And... you've done ! Now if you try to open your project JavaScript files in Sublime Text you should have your errors highlighted by SublimeLinter.

 ![](https://files.slack.com/files-pri/T0259MXT3-F3Z6CD7L1/eg.png)
 
 JSCS has also some plugins like vim,Brackets and LightTable. I would like to prefer a ***Sublime Text*** as a text editor


***Congratulation!*** you have successfully install JSCS and also integrated with sublime text.


## Plugin installation
1.If you are using nvm and zsh, ensure that the line to load nvm is in .zshenv and not .zshrc.
2.If you are using zsh and oh-my-zsh, do not load the nvm plugin for oh-my-zsh.



Please use Package Control to install the linter plugin. This will ensure that the plugin will be updated when new versions are available. If you want to install from source so you can modify the source code, you probably know what you are doing so we won’t cover that here.

To install via Package Control, do the following:

1. Within Sublime Text, bring up the Command Palette and type install. Among the commands you should see Package Control: Install Package. If that command is not highlighted, use the keyboard or mouse to select it. There will be a pause of a few seconds while Package Control fetches the list of available plugins.

2. When the plugin list appears, type jscs format. Among the entries you should see JSCSFormatter. If that entry is not highlighted, use the keyboard or mouse to select it.


**Commands**
* Command palette:
    1. JSCSFormatter: Format this file
* Shortcut key:
    1. Linux/Windows: [Ctrl + Shift + H]
    2. Mac: [Cmd + Shift + H]

**Settings**

By default, JSCSFormatter will supply the following settings:
```
{
  // The Nodejs installation path
  "node_path": {
    "windows": "node.exe",
    "linux": "/usr/bin/nodejs",
    "osx": "/usr/local/bin/node"
  },

  // The location of the the globally installed jscs package
  "jscs_path": {
    "windows": "%APPDATA%/npm/node_modules/jscs/bin/jscs",
    "linux": "/usr/bin/jscs",
    "osx": "/usr/local/bin/jscs"
  },

  // Specify this path to a JSCS config file to override the default behavior.
  // Passed to JSCS as --config. Read more here:
  // http://jscs.info/overview.html#-config-
  "config_path": "",

  // Automatically format when a file is saved.
  "format_on_save": false,

  // Only attempt to format files with whitelisted extensions on save.
  // Leave empty to disable the check
  "format_on_save_extensions": [
    "js",
    "jsx",
    "es",
    "es6",
    "babel"
  ]
}
```
* Modify any settings within the Preferences -> Package Settings -> JSCS Formatter -> Settings - User file.

**Project-specific settings override**

To override global plugin configuration for a specific project, add a settings object with a JSCS-Formatter key in your .sublime-project. This file is accessible via Project -> Edit Project.

For example:
```
>{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "JSCS-Formatter": {
      "format_on_save": true
    }
  }
>}
```

**Setting up paths in Sublime with NVM**

1. Find path of Node and JSCS “ npm config get prefix
2.Return to Sublime
Modify the file at `Preferences > Package Settings > JSCS-Formatter > Settings-User`.
Update the `node_path` and `jscs_path` settings.

```javascript
{
  "node_path": {
    "linux": "/home/YOURUSER/.nvm/versions/node/v6.9.2/bin/node",
  },

  "jscs_path": {
    "linux": "/home/YOURUSER/.nvm/versions/node/v6.9.2/bin/jscs",
  },
}
```
## JShint :-

JSHint is a community-driven tool that detects errors and potential problems in JavaScript code. Since JSHint is so flexible, you can easily adjust it in the environment you expect your code to execute. JSHint is open source and will always stay this way.


#### Installation of JShint:-

JSHint runs in a number of different environments; installation is different for each.

**Browser-like environments**

A standalone files is built for browser-like environments with every release. You'll find it in the `dist` directory of the download.

**Node Js**
Each release of JSHint is published to npm, the package manager for the Node.js platform.

You may install it globally using the following command:

     npm install -g jshint
     
After this, you can use the jshint command-line interface.
It is common to install JSHint as a development dependency within an existing Node.js project:
        
    npm install --save-dev jshint

#### Plugins for text editors and IDEs

**Sublime Text :-**

* Sublime-JSHint Gutter, JSHint plugin for graphically displaying lint results in ST2 and ST3.
* sublime-jshint, JSHint build package for ST2.
* Sublime Linter, inline lint highlighting for ST2.

**Atom :-**
* linter-jshint, JSHint plugin for Atom's Linter.
* JSHint for Atom, JSHint package for Atom.




