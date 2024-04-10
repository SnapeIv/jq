class WebPage {
    title: string;
    header: string;
    content: string;
    footer: string;
  
    constructor(title: string, header: string, content: string, footer: string) {
      this.title = title;
      this.header = header;
      this.content = content;
      this.footer = footer;
    }
  
    displayPage(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Header: ${this.header}`);
      console.log(`Content: ${this.content}`);
      console.log(`Footer: ${this.footer}`);
    }
  }
  
  class WebPageBuilder {
    private title: string = '';
    private header: string = '';
    private content: string = '';
    private footer: string = '';
  
    setTitle(title: string): this {
      this.title = title;
      return this;
    }
  
    setHeader(header: string): this {
      this.header = header;
      return this;
    }
  
    setContent(content: string): this {
      this.content = content;
      return this;
    }
  
    setFooter(footer: string): this {
      this.footer = footer;
      return this;
    }
  
    build(): WebPage {
      return new WebPage(this.title, this.header, this.content, this.footer);
    }
  }
  