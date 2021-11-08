# Contributing to Record You Course

:+1::tada: Tout d'abord, merci d'avoir pris le temps de contribuer! :tada::+1:

Ce qui suit est un ensemble de directives pour contribuer à Record Your Course et à ses packages, qui sont hébergés dans l'organisation RecordYourCourse (https://github.com/Osaring/RecordYourCourse) sur GitHub. Ce sont principalement des lignes directrices, pas des règles. Faites preuve de bon sens et n'hésitez pas à proposer des modifications à ce document dans une pull request.


#### Table des matières

[Code de conduite](#code-of-conduct)

[Questions](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)

[Que dois-je savoir avant de commencer ?](#what-should-i-know-before-i-get-started)
  * [Packages de RecordYourCourse](#recordyourcourses-and-packages)
  * [Design de RecordYourCourse](#design-decisions)

[Comment puis-je contribuer?](#how-can-i-contribute)
  * [Signaler des Bugs](#reporting-bugs)
  * [Faire des suggestions](#suggesting-enhancements)
  * [Votre première contribution au code](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Guides de style](#styleguides)
  * [Messages de commit](#git-commit-messages)
  * [Guides de style NodeJS](#nodejs-styleguide)
  * [Guides de style ReactJS](#reactjs-styleguide)
  * [Guides de style Documentation](#documentation-styleguide)

[Notes complémentaires](#additional-notes)

## Code de conduite
Ce projet et toutes les personnes qui y participent sont régis par le code de conduite Record Your Courses. En participant, vous êtes censé respecter ce code. Veuillez signaler tout comportement inacceptable.

## Questions !

> **Note:** Veuillez ne pas signaler de problème pour poser une question. Vous obtiendrez des résultats plus rapides en utilisant les ressources ci-dessous.

## Que dois-je savoir avant de commencer ?
### Packages de RecordYourCourse
Record Your Course est un projet open source qui a possiblement été duppliqué plusieurs fois. Lorsque vous envisagez initialement de contribuer à Record Your Course, vous ne savez peut-être pas lequel de ces référentiels implémente la fonctionnalité que vous souhaitez modifier ou pour laquelle vous souhaitez signaler un bogue. Cette section devrait vous y aider.

Record Your Course est volontairement très modulaire. Presque tous les éléments d'interface utilisateur non-éditeur avec lesquels vous interagissez proviennent d'un package, même des éléments fondamentaux.


Pour avoir une idée des packages fournis avec Record Your Course, vous pouvez accéder à <Paramètres> Packages dans Record Your Course et consulter la section Packages de base.


De plus, comme Record Your Course est si extensible, il est possible qu'une fonctionnalité à laquelle vous vous êtes habitué dans Record Your Course ou qu'un problème que vous rencontrez ne provienne pas du tout d'un package groupé, mais plutôt d'un package communautaire que vous avez installé. Chaque package communautaire a également son propre référentiel.


### Design de RecordYourCourse

Lorsque nous prenons une décision importante sur la façon dont nous maintenons le projet et sur ce que nous pouvons ou ne pouvons pas supporter, nous la documentons dans le [dépôt atom/design-decisions] (https://github.com/atom/design-decisions). Si vous avez une question sur la façon dont nous faisons les choses, vérifiez si elle y est documentée. Si ce n'est *pas* le cas, ouvrez un nouveau sujet sur [Github Discussions, le forum officiel d'Atom] (https://github.com/atom/atom/discussions) et posez votre question.

## Comment puis-je contribuer?

### Signaler des Bugs

Cette partie va vous montrer la procédure à suivre pour signaler des bugs. Suivez les guides de maintien du projet et la communauté pourra comprendre votre signalement :pencil:, repreoduire le comportement :computer: :computer:, et trouver des signalements identiques :mag_right:.

Avant de créer un rapport de bogue, veuillez consulter [cette liste](#before-submitting-a-bug-report) car vous pourriez découvrir que vous n'avez pas besoin d'en créer un. Lorsque vous créez un rapport de bogue, veuillez [inclure autant de détails que possible](#how-do-i-submit-a-good-bug-report). Remplissez [le modèle requis](https://github.com/atom/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md), les informations demandées nous aident à résoudre les problèmes plus rapidement.

Traduit avec www.DeepL.com/Translator (version gratuite)

> **Note:** Si vous trouvez un problème **Clos** qui semble être le même que celui que vous rencontrez, ouvrez un nouveau problème et incluez un lien vers le problème original dans le corps de votre nouveau problème.

Les bogues sont suivis en tant que [problèmes GitHub](https://guides.github.com/features/issues/). Créer un problème sur ce référentiel et fournissez les informations suivantes en remplissant [le modèle](https://github.com/atom/.github/blob/master/.github/ISSUE_TEMPLATE/bug_report.md).

Expliquez le problème et incluez des détails supplémentaires pour aider les responsables à reproduire le problème :

* **Utiliser un titre et une description clair** pour les issues afin d'identifier le problème.
* **Décrivez précisément les étapes permettant de reproduire le problème** avec autant de détails que possible. Par exemple, commencez par expliquer comment vous avez démarré Atom, c'est-à-dire quelle commande exactement vous avez utilisée dans le terminal, ou comment vous avez démarré Atom autrement. Lorsque vous énumérez les étapes, **ne dites pas seulement ce que vous avez fait, mais expliquez aussi comment vous avez fait**. Par exemple, si vous avez déplacé le curseur à la fin d'une ligne, expliquez si vous avez utilisé la souris ou un raccourci clavier, et si oui, lequel ?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. If you use the keyboard while following the steps, **record the GIF with the [Keybinding Resolver](https://github.com/atom/keybinding-resolver) shown**. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that Atom crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, include a [CPU profile capture](https://flight-manual.atom.io/hacking-atom/sections/debugging/#diagnose-runtime-performance) with your report.
* **If Chrome's developer tools pane is shown without you triggering it**, that normally means that you have a syntax error in one of your themes or in your `styles.less`. Try running in [Safe Mode](https://flight-manual.atom.io/hacking-atom/sections/debugging/#using-safe-mode) and using a different theme or comment out the contents of your `styles.less` to see if that fixes the problem.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem in [safe mode](https://flight-manual.atom.io/hacking-atom/sections/debugging/#diagnose-runtime-performance-problems-with-the-dev-tools-cpu-profiler)?**
* **Did the problem start happening recently** (e.g. after updating to a new version of Atom) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Atom?** What's the most recent version in which the problem doesn't happen? You can download older versions of Atom from [the releases page](https://github.com/atom/atom/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Python files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:
* **Quelle version de Record Your Course utilisz-vous ?** Vous pouvez avoir la version exact de Record Your Course `atom -v`, or by starting Atom and running the `Application: About` command from the [Command Palette](https://github.com/atom/command-palette).
* **What's the name and version of the OS you're using**?
* **Are you running Atom in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
* **Which [packages](#atom-and-packages) do you have installed?** You can get that list by running `apm list --installed`.
* **Are you using [local configuration files](https://flight-manual.atom.io/using-atom/sections/basic-customization/)** `config.cson`, `keymap.cson`, `snippets.cson`, `styles.less` and `init.coffee` to customize Atom? If so, provide the contents of those files, preferably in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines) or with a link to a [gist](https://gist.github.com/).
* **Are you using Atom with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

#### Faire des suggestions

Cette section vous guide dans la soumission d'une suggestion d'amélioration pour Atom, qu'il s'agisse de nouvelles fonctionnalités ou d'améliorations mineures de fonctionnalités existantes. Le respect de ces directives permet aux responsables et à la communauté de comprendre votre suggestion :pencil : et de trouver des suggestions connexes :mag_right :.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](https://github.com/atom/.github/blob/master/.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

* **Check the [debugging guide](https://flight-manual.atom.io/hacking-atom/sections/debugging/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of Atom](https://flight-manual.atom.io/hacking-atom/sections/debugging/#update-to-the-latest-version) and if you can get the desired behavior by changing [Atom's or packages' config settings](https://flight-manual.atom.io/hacking-atom/sections/debugging/#check-atom-and-package-settings).
* **Check if there's already [a package](https://atom.io/packages) which provides that enhancement.**
* **Determine [which repository the enhancement should be suggested in](#atom-and-packages).**
* **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+user%3Aatom)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#atom-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Atom which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most Atom users and isn't something that can or should be implemented as a [community package](#atom-and-packages).
* **List some other text editors or applications where this enhancement exists.**
* **Specify which version of Atom you're using.** You can get the exact version by running `atom -v` in your terminal, or by starting Atom and running the `Application: About` command from the [Command Palette](https://github.com/atom/command-palette).
* **Specify the name and version of the OS you're using.**

### Votre premère contribution au code

Unsure where to begin contributing to Atom? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

If you want to read about using Atom or developing packages in Atom, the [Atom Flight Manual](https://flight-manual.atom.io) is free and available online. You can find the source to the manual in [atom/flight-manual.atom.io](https://github.com/atom/flight-manual.atom.io).

### Pull Requests

Le processus décrit ici a plusieurs objectifs :

- Maintenir la qualité d'Atom
- Corriger les problèmes qui sont importants pour les utilisateurs
- Faire participer la communauté à l'élaboration du meilleur Atom possible
- mettre en place un système durable permettant aux responsables d'Atom d'examiner les contributions.

Veuillez suivre les étapes suivantes pour que votre contribution soit prise en compte par les responsables :

1. Suivez toutes les instructions du [modèle] (PULL_REQUEST_TEMPLATE.md).
2. Suivez les [guides de style](#styleguides)
3. Après avoir soumis votre pull request, vérifiez que toutes les [vérifications d'état](https://help.github.com/articles/about-status-checks/) passent <details><summary>Que faire si les vérifications d'état échouent?</summary>Si une vérification d'état échoue, et que vous pensez que l'échec n'est pas lié à votre modification, veuillez laisser un commentaire sur la pull request expliquant pourquoi vous pensez que l'échec n'est pas lié. Un mainteneur effectuera à nouveau la vérification d'état pour vous. Si nous concluons que l'échec était un faux positif, nous ouvrirons une question pour suivre ce problème avec notre suite de vérification d'état.</details>

Bien que les conditions préalables ci-dessus doivent être remplies avant que votre demande d'extraction ne soit examinée, le ou les examinateurs peuvent vous demander d'effectuer des travaux de conception supplémentaires, des tests ou d'autres modifications avant que votre demande d'extraction ne soit finalement acceptée.

## Guides de style

### Messages de commit

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### Guides de style NodeJS

All JavaScript code is linted with [eslint](https://eslint.io/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Built in Atom and Electron Modules (such as `atom`, `remote`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* [Avoid platform-dependent code](https://flight-manual.atom.io/hacking-atom/sections/cross-platform-compatibility/)

### Guides de style ReactJS
...

### Guides de style Documentation

* Use [AtomDoc](https://github.com/atom/atomdoc).
* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

## Notes complémentaires

#### Type of Issue and Issue State

| Label name | `atom/atom` :mag_right: | `atom`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-atom-repo-label-enhancement] | [search][search-atom-org-label-enhancement] | Feature requests. |
| `bug` | [search][search-atom-repo-label-bug] | [search][search-atom-org-label-bug] | Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-atom-repo-label-question] | [search][search-atom-org-label-question] | Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-atom-repo-label-feedback] | [search][search-atom-org-label-feedback] | General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-atom-repo-label-help-wanted] | [search][search-atom-org-label-help-wanted] | The Atom core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-atom-repo-label-beginner] | [search][search-atom-org-label-beginner] | Less complex issues which would be good first issues to work on for users who want to contribute to Atom. |
| `more-information-needed` | [search][search-atom-repo-label-more-information-needed] | [search][search-atom-org-label-more-information-needed] | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `needs-reproduction` | [search][search-atom-repo-label-needs-reproduction] | [search][search-atom-org-label-needs-reproduction] | Likely bugs, but haven't been reliably reproduced. |
| `blocked` | [search][search-atom-repo-label-blocked] | [search][search-atom-org-label-blocked] | Issues blocked on other issues. |
| `duplicate` | [search][search-atom-repo-label-duplicate] | [search][search-atom-org-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-atom-repo-label-wontfix] | [search][search-atom-org-label-wontfix] | The Atom core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-atom-repo-label-invalid] | [search][search-atom-org-label-invalid] | Issues which aren't valid (e.g. user errors). |
| `package-idea` | [search][search-atom-repo-label-package-idea] | [search][search-atom-org-label-package-idea] | Feature request which might be good candidates for new packages, instead of extending Atom or core Atom packages. |
| `wrong-repo` | [search][search-atom-repo-label-wrong-repo] | [search][search-atom-org-label-wrong-repo] | Issues reported on the wrong repository (e.g. a bug related to the [Settings View package](https://github.com/atom/settings-view) was reported on [Atom core](https://github.com/atom/atom)). |

#### Topic Categories

| Label name | `atom/atom` :mag_right: | `atom`‑org :mag_right: | Description |
| --- | --- | --- | --- |
| `windows` | [search][search-atom-repo-label-windows] | [search][search-atom-org-label-windows] | Related to Atom running on Windows. |
| `linux` | [search][search-atom-repo-label-linux] | [search][search-atom-org-label-linux] | Related to Atom running on Linux. |
| `mac` | [search][search-atom-repo-label-mac] | [search][search-atom-org-label-mac] | Related to Atom running on macOS. |
| `documentation` | [search][search-atom-repo-label-documentation] | [search][search-atom-org-label-documentation] | Related to any type of documentation (e.g. [API documentation](https://atom.io/docs/api/latest/) and the [flight manual](https://flight-manual.atom.io/)). |
| `performance` | [search][search-atom-repo-label-performance] | [search][search-atom-org-label-performance] | Related to performance. |
| `security` | [search][search-atom-repo-label-security] | [search][search-atom-org-label-security] | Related to security. |
| `ui` | [search][search-atom-repo-label-ui] | [search][search-atom-org-label-ui] | Related to visual design. |
| `api` | [search][search-atom-repo-label-api] | [search][search-atom-org-label-api] | Related to Atom's public APIs. |
| `uncaught-exception` | [search][search-atom-repo-label-uncaught-exception] | [search][search-atom-org-label-uncaught-exception] | Issues about uncaught exceptions, normally created from the [Notifications package](https://github.com/atom/notifications). |
| `crash` | [search][search-atom-repo-label-crash] | [search][search-atom-org-label-crash] | Reports of Atom completely crashing. |
| `auto-indent` | [search][search-atom-repo-label-auto-indent] | [search][search-atom-org-label-auto-indent] | Related to auto-indenting text. |
| `encoding` | [search][search-atom-repo-label-encoding] | [search][search-atom-org-label-encoding] | Related to character encoding. |
| `network` | [search][search-atom-repo-label-network] | [search][search-atom-org-label-network] | Related to network problems or working with remote files (e.g. on network drives). |
| `git` | [search][search-atom-repo-label-git] | [search][search-atom-org-label-git] | Related to Git functionality (e.g. problems with gitignore files or with showing the correct file status). |

#### Pull Request Labels

| Label name | `atom/atom` :mag_right: | `atom`‑org :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-atom-repo-label-work-in-progress] | [search][search-atom-org-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-atom-repo-label-needs-review] | [search][search-atom-org-label-needs-review] | Pull requests which need code review, and approval from maintainers or Atom core team. |
| `under-review` | [search][search-atom-repo-label-under-review] | [search][search-atom-org-label-under-review] | Pull requests being reviewed by maintainers or Atom core team. |
| `requires-changes` | [search][search-atom-repo-label-requires-changes] | [search][search-atom-org-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-atom-repo-label-needs-testing] | [search][search-atom-org-label-needs-testing] | Pull requests which need manual testing. |
