# ga_javascript

<h1><strong>Weeks 1 learnings</strong></h1>
<h2><strong>Geeks for Geeks</strong></h2>
<p>Check out <a href="https://www.geeksforgeeks.org/most-commonly-used-tags-in-html/">Geeks for Geeks</a> which lists predefined tags for HTML.</p>
<h2><strong>What is Git?</strong></h2>
<p>Git keeps a list of changes to files. 
<p><em>"Git thinks of its data more like a series of snapshots of a miniature filesystem. With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if files have not changed, Git doesn’t store the file again, just a link to the previous identical file it has already stored. Git thinks about its data more like a stream of snapshots." (https://git-scm.com/).</em></p>
<h2><strong>Staging, committing and pushing</strong></h2>
<p> 1. Staging is the process of telling Git what files to commit (new untracked files, modified files, or deleted files). We use the add command (<strong>git add .</strong>) to add files to a staging area before committing.<<br>
2. Committing a file means saving your changes to your local repository by using the commit command (<strong>git commit -m "add a note"</strong>) and asked to enter a short description called a commit message to help other developers understand the orders you have given in the codebase. These should be written in the past tense so that those reading will understand what your code will do<br>
3. Pushing a file means saving your file to the remote repository, such as Github, using push command (e.g. <strong>git push -u origin master or git push -u origin main</strong>)<br><br>
<h2><strong>How to stage, commit and push</strong></h2>
<p>You can either do these stages from within the terminal by entering these commands, or using Visual Studio Code, you can use Source Control to expedite these processes. You must always save before starting the staging.
