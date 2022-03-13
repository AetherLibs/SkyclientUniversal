class Actions {
    method!: string;
    document!: string;
    icon!: string;
    text!: string;
    creator!: string;
    link!: string;

    /* 
        Gets the method object.
        @return this.method
    */
    getMethod() {
        return this.method;
    }

    /* 
        Sets the method object.
        @return this
    */
    setMethod(method: string) {
        this.method = method;
        return this;
    }

    /* 
        Gets the document object.
        @return this.document
    */
    getDocument() {
        return this.document;
    }

    /* 
        Sets the document object.
        @return this
    */
    setDocument(document: string) {
        this.document = document;
        return this;
    }

    /* 
        Gets the icon object.
        @return this.icon
    */
    getIcon() {
        return this.icon;
    }

    /* 
        Sets the icon object.
        @return this
    */
    setIcon(icon: string) {
        this.icon = icon;
        return this;
    }

    /* 
        Gets the text object.
        @return this.text
    */
    getText() {
        return this.text;
    }

    /* 
        Sets the text object.
        @return this
    */
    setText(text: string) {
        this.text = text;
        return this;
    }

    /* 
        Gets the link object.
        @return this.link
    */
    getLink() {
        return this.link;
    }

    /* 
        Sets the link object.
        @return this
    */
    setLink(link: string) {
        this.link = link;
        return this;
    }

    toString() {
        return "Actions(" +
                "method='" + this.method + '\'' +
                ", document='" + this.document + '\'' +
                ", icon='" + this.icon + '\'' +
                ", text='" + this.text + '\'' +
                ", link='" + this.link + '\'' +
                ')';
    }
}

export default Actions;