# Getting started with the Web

***

<br/>

# The story of your first website

## Installing basic software

> Installing a text editor and modern web browesers 

<br/>

## What will your website look like? 

> Before you start writing the code for your website, you should plan it first. What information are you showcasing? What fonts and colors are you using? [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)

<br/>

### 1. First things first: planning
> 1. **What is your website about?**
> 2. **what information are you presenting on the subject?**
> 3. **what does your website look like?**

<br/>

### 2. Sketching out your design
> Simply sketch out your website to look. 

<br/>

### 3. Choosing your assets
> At this point, it's good to start putting together the content that will eventually appear on your webpage. ( **Text, Theme color, Images, Font** )

<br/>

## Dealing with files 
> A website consists of many files: text content, code, stylesheets, media content, and so on. When you're building a website, you need to assemble these files into a sensible structure and make sure they can talk to one another. [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files) explains how to set up a sensible file structure for your website and what issues you should be aware of.

<br/>

### Where should your website live on your computer? 
> When you are working on a website locally on your computer, you should keep all the related files in a single folder that mirrors the published website's file structure on the server. This folder can live anywhere you like, but you should put it somewhere where you can easily find it, maybe on your Desktop, in your Home folder, or at the root of your hard drive.

<br/>

### An aside on casing and spacing 
> **You'll notice that throughout this article, we ask you to name folders and files completely in lowercase with no spaces.** This is because:
> 1. Many computers, particularly web servers, are case-sensitive. So for example, if you put an image on your website at test-site/MyImage.jpg and then in a different file you try to invoke the image as test-site/myimage.jpg, it may not work.
> 2. Browsers, web servers, and programming languages do not handle spaces consistently. For example, if you use spaces in your filename, some systems may treat the filename as two filenames. Some servers will replace the areas in your filenames with "%20" (the character code for spaces in URIs), resulting in all your links being broken. **It's better to separate words with hyphens, rather than underscores: my-file.html vs. my_file.html**.

The short answer is that you should use a hyphen for your file names. **The Google search engine treats a hyphen as a word separator but does not regard an underscore that way.** For these reasons, **it is best to get into the habit of writing your folder and file names lowercase with no spaces and with words separated by hyphens, at least until you know what you're doing.**  That way you'll bump into fewer problems later down the road.

<br/>

### What structure should your website have? 

> 1. **index.html**: This file will generally contain your homepage content, that is, the text and images that people see when they first go to your site. Using your text editor, create a new file called index.html and save it just inside your test-site folder.
> 2. **images folder**: This folder will contain all the images that you use on your site. Create a folder called images, inside your test-site folder.
> 3. **styles folder**: This folder will contain the CSS code used to style your content (for example, setting text and background colors). Create a folder called styles, inside your test-site folder.
> 4. **scripts folder**: This folder will contain all the JavaScript code used to add interactive functionality to your site (e.g. buttons that load data when clicked). Create a folder called scripts, inside your test-site folder.

<br/>

### File paths 

> To make files talk to one another, you have to provide a file path between them — basically a route, so one file knows where another one is.

## HTML basics
> File name : HTML basics.md