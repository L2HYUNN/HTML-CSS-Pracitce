# HTML basics

***

<br/>

# so what is HTML? 

> HTML is Hypertext Markup Language that defines the structure of our content.  it consists of a series of elements.

### Simple Example

```html 
<p>My cat is very grumpy</p>
```

<br/>

## 1. Anatomy of an HTML element

![](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-small.png)

>HTML element consists of the opening tag, the closing tag, the content.

Elements can also have attributes that look like the following: 

![](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png)

Attributes contain extra information about the element that you don't want to appear in the actual content.

### An attribute should always have the following: 

>1. A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
>2. The attribute name followed by an equal sign.
>3. The attribute value wrapped by opening and closing quotation marks.

<br/>

## 2. Nesting elements

> we can put elements inside other elements too - this is called **nesting**

### Simple Example

```html 
<p>My cat is <strong>very</strong> grumpy.</p>
```

<br/>

## 3. Empty elements

> some elements have no content and are called **empty elements**

### Simple Example

```html 
<img src="images/firefox-icon.png" alt="My test image">
```

<br/>

## 4. Anatomy of an HTML document

> That wraps up the basics of individual HTML elements, but they aren't handy on their own. Now we'll look at how individual elements are combined to form an entire HTML page.

### Simple Example

```html 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```


* `<!DOCTYPE html >`

> — doctype. It is a required preamble. **(doctype is good)** However these days, they don't do much and are basically just needed to make sure your document behaves correctly. That's all you need to know for now.

* `<html>`

> This element wraps all the content on the entire page and is sometimes known as the root element. 

* `<head>`

> This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations, and more.

* `<body>`

> This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.


* `<meta charset="utf-8"v>`

> This element sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages.

* `<title>`

> This sets the title of your page, which is the title that appears in the browser tab the page is loaded in.

<br/>

# Images 

### Simple Example

```html
<img src="images/firefox-icon.png" alt="My test image">
```

> We have also included an alt (alternative) attribute. In this attribute, you specify descriptive text for users who cannot see the image

<br/>

# Marking up text 

> This section will cover some of the essential HTML elements you'll use for marking up the text.

## 1. Headings 

> Heading elements allow you to specify that certain parts of your content are headings — or subheadings.

### Simple Example

```html
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

**Note** :  You'll see that your heading level 1 has an implicit style. Don't use heading elements to make text bigger or bold, because they are used for accessibility and other reasons such as SEO. Try to create a meaningful sequence of headings on your pages, without skipping levels.

<br/>

## 2. Paragraphs

> As explained above, `<p>` elements are for containing paragraphs of text; you'll use these frequently when marking up regular text content:

### Simple Example

```html
<p>This is a single paragraph</p>
```

<br/>

## 3. Lists

> A lot of the web's content is lists and HTML has special elements for these. Marking up lists always consists of at least 2 elements. The most common list types are ordered and unordered lists

1. **Unordered lists** are for lists where the order of the items doesn't matter, such as a shopping list. These are wrapped in a `<ul>` element.
2. **Ordered lists** are for lists where the order of the items does matter, such as a recipe. These are wrapped in an `<ol>` element.

**Note** : Each item inside the lists is put inside an `<li>` (list item) element.

### Simple Example

```html
<p>At Mozilla, we’re a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together ... </p>
```

<br/>

## Links

> Links are very important — they are what makes the web a web! To add a link, we need to use a simple element — `<a>` — "a" being the short form for "anchor".

### Simple Example

```html
<a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>
```

**Note** : You might get unexpected results if you omit the https:// or http:// part, called the protocol, at the beginning of the web address. After making a link, click it to make sure it is sending you where you wanted it to.

href might appear like a rather obscure choice for an attribute name at first. If you are having trouble remembering it, remember that it stands for **hypertext reference**.