document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("markdown-input");
    const preview = document.getElementById("preview");
    const clearButton = document.getElementById("clear-btn");
    // Marked.js for Markdown Parsing
   //Highlight.js for Code Highlighting

    marked.setOptions({
        highlight: function (code, lang) {
            return lang && hljs.getLanguage(lang) 
                ? hljs.highlight(code, { language: lang }).value 
                : hljs.highlightAuto(code).value;
        },
        breaks: true,  // Enables line breaks
        gfm: true       // GitHub Flavored Markdown
    });

 
    textarea.addEventListener("input", () => {
        preview.innerHTML = marked.parse(textarea.value);
    });


    clearButton.addEventListener("click", () => {
        textarea.value = "";
        preview.innerHTML = "";
    });
});
