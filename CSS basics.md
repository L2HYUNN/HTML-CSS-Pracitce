# CSS basics

***

<br/>

# What is CSS? 

> Like HTML, CSS is not a programming language. It's not a markup language either. **CSS is a style sheet language.** CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:

### Simple Example

```css
p {
    color: red;
}
```
To make the code work, we still need to apply this CSS (above) to your HTML document. Otherwise, the styling won't change the appearance of the HTML. 

>1. Open your index.html file. Paste the following line in the head (between the <head> and </head> tags):
> ```css 
> <link href="styles/style.css" rel="stylesheet">
> ```
>2. Save index.html and load it in your browser. You should see something like this:

## Anatomy of a CSS ruleset

![](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)

> The whole structure is called a **ruleset.** (The term ruleset is often referred to as just rule.) Note the names of the individual parts:

### Selector
> This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, `<p>` elements). To style a different element, change the selector.

### Declaration
> This is a single rule like `color: red`;. It specifies which of the element's properties you want to style.

### Properties
> These are ways in which you can style an HTML element. (In this example, color is a property of the `<p>` elements.) In CSS, you choose which properties you want to affect in the rule.

### Property value
> To the right of the property—after the colon—there is the property value. This chooses one out of many possible appearances for a given property. (For example, there are many color values in addition to red.)

### Note the other important parts of the syntax:
> * Apart from the selector, each ruleset must be wrapped in curly braces. `({})`
> * Within each declaration, you must use a colon `(:)` to separate the property from its value or values.
> * Within each ruleset, you must use a semicolon `(;)` to separate each declaration from the next one.

To modify multiple property values in one ruleset, write them separated by semicolons, like this: 
```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```
## Selecting multiple elements
> You can also select multiple elements and apply a single ruleset to all of them. Separate multiple selectors by commas. For example:
>```css
>p, li, h1 {
>  color: red;
>}
>```

## Different types of selectors
> There are many different types of selectors. The examples above use element selectors, which select all elements of a given type. But we can make more specific selections as well. Here are some of the more common types of selectors:

| Selector name | What does it select | Example |
| --- | --- | --- | 
| Element selector <br/> (sometimes called a tag or type selector) | All HTML elements of the specified type. | p selects `<p>` | 
| ID selector | The element on the page with the specified ID. On a given HTML page, each id value should be unique. | #my-id <br/> selects `<p id="my-id">` or `<a id="my-id">` | 
| Class selector | The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page. | .my-class <br/>selects `<p class="my-class">` and `<a class="my-class">` | 
| Attribute selector | The element(s) on the page with the specified attribute. | img[src] <br/> selects `<img src="myimage.png">` but not `<img>` | 
| Pseudo-class selector | The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.) | a:hover <br/> selects `<a>`, but only when the mouse pointer is hovering over the link. | 
|  |  |  |

There are many more selectors to discover. To learn more, see the MDN [Selectors guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors).

# Fonts and text
> Now that we've explored some CSS fundamentals, let's improve the appearance of the example by adding more rules and information to the style.css file.

1. First, find the output from **Google Fonts** that you previously saved from What will your website look like?. Add the `<link>` element somewhere inside your index.html's head (anywhere between the `<head>` and `</head>` tags). It looks something like this:
2. Add the following lines (shown below), replacing the font-family assignment with your font-family selection from What will your website look like?. The property font-family refers to the font(s) you want to use for text. This rule defines a global base font and font size for the whole page. **Since `<html>` is the parent element of the whole page, all elements inside it inherit the same font-size and font-family.** 
    ```css
    html {
    font-size: 10px; 
    /* px means "pixels": the base font size is now 10 pixels high  */
    font-family: "Open Sans", sans-serif; 
    /* this should be the rest of the output you got from Google fonts */
    }
    ```
3. Now let's set font sizes for elements that will have text inside the HTML body (`<h1>`, `<li>`, and `<p>`). We'll also center the heading. Finally, let's expand the second ruleset (below) with settings for line height and letter spacing to make body content more readable.
   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p, li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

![](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/website-screenshot-font-small.png)

# CSS: all about boxes 
> Something you'll notice about writing CSS: a lot of it is about boxes. This includes setting size, color, and position. Most HTML elements on your page can be thought of as boxes sitting on top of other boxes. CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:

* **padding,** the space around the content. In the example below, it is the space around the paragraph text.
* **border,** the solid line that is just outside the padding.
* **margin,** the space around the outside of the border.
  
![](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png)

## Centering the image
> Next, we center the image to make it look better. We could use the margin: 0 auto trick again as we did for the body. But there are differences that require an additional setting to make the CSS work. 

The `<body>` is a block element, meaning it takes up space on the page. A block element can have margin and other spacing values applied to it. In contrast, images are inline elements. It is not possible to apply margin or spacing values to inline elements. So to apply margins to the image, we must give the image block-level behavior using `display: block;`.
```css
img {
  display: block;
  margin: 0 auto;
}
```