### Configuration Sublime-text-3 with Jscs and Jshint

To configure sublime-text-3, we need to install sublime-text-3 in our system. click below link to download:-

    https://www.sublimetext.com/3

Now you have to install packages in sublime text.

* sublimeLinter
* sublimeLinter-jshint
* jscs-formatter
* DoxyDoxygen

To install above packages you need to follow bewlow instructions :-

1. Go to Tools menu select command palette or `shift + ctrl + P`.
2. Now write install package and  select whichever you want to install.

![](https://files.slack.com/files-tmb/T0259MXT3-F416Q7T0E-1c2d438d24/jscs_720.png)

Now you have to install modules in your system globaly. to install modules in your system follow below instructions :-
**All the commands write in your terminal**
1. For Jscs: `npm install jscs -g`.
2. For Jshint: `npm install jshint -g`.

**Note: First you have to install node js then this command will execute in your system.**
****


#### JSCS(JavaScript Code Style Checker)

It	is	enforced	for	the	coding	rules	for	developing	the	code in appropriate	manner	for	team	and	makes	an	easier	for	readability	foreach	person	to	understand	the	code.

To	check	your	code	JSCS	will	need	a	configuration	and	file	name should	be	.jscs.json or jscs.	after	installation	in	yourroot	file	and	this	file	will contain	all	the	rules	and	must	follow	this	rules.

****
#### Rules:-

There are some rules of JSCS which can be checked from this link according to need http://jscs.info/rules 
Remember rules can be mentioned according to your need.

```
{ 
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
	"disallowLeftStickedOperators": [ "?", "-", "/", "*", "=",     "==","===","!=", "!==", ">", 	">=", "<", "<=" ], 
	"disallowRightStickedOperators": [ "?", "/", "*", ":", "=", "==", "===", "!=", "!==", ">", 	">=", "<", "<="], 
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
```
These rules enforce curly braces after if statements, disallow the use of with, enforce Unix line ending and so on. You can found the rules list and their meaning in the JSCS Readme.

When you have finished to play with the rules, put your .jscs.json configuration file at the root of your project.
****
**Jscs Formatter settings**
By	default,	JSCSFormatter	will	supply	the	following	settings:
``` javascript
{
		//	The	Nodejs	installation	path
		"node_path":	{
				"windows":	"node.exe",
				"linux":	"/usr/bin/nodejs",
				"osx":	"/usr/local/bin/node"
		},
	//The location of	the	the	globally installed jscs package
		"jscs_path":	{				"windows":	"%APPDATA%/npm/node_modules/jscs/bin/jscs"
,
				"linux":	"/usr/bin/jscs",
				"osx":	"/usr/local/bin/jscs"
		},
	//	Specify	this	path	to	a	JSCS	config	file	to	override	
the	default	behavior.
	//	Passed	to	JSCS	as	--config.	Read	more	here:
	//	http://jscs.info/overview.html#-config-
		"config_path":	"",
	//	Automatically	format	when	a	file	is	saved.
		"format_on_save":	false,
	//	Only	attempt	to	format	files	with	whitelisted	extens
ions	on	save.
	//	Leave	empty	to	disable	the	check
		"format_on_save_extensions":	[
				"js",
				"jsx",
				"es",
				"es6",
				"babel"
		]
}
```
**Or**

**Modify	any	settings	within	the	Preferences	->Package Settings->	JSCS	Formatter	->	Settings-User file.**
****

**Error** :-
![](https://files.slack.com/files-tmb/T0259MXT3-F3ZQTC6D6-ffe17eeaf3/error_720.png)

Here you can clearly can see the line no. 4 and 5  has an error.

****

**Output**
![](https://files.slack.com/files-tmb/T0259MXT3-F40E52V5H-e33e5a5cd0/noerror_720.png)

Here you can see that there is no any error in it.

****
