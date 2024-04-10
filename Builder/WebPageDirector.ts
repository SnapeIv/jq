class WebPageDirector {
    createArticle(content: string): WebPage {
      return new WebPageBuilder()
        .setTitle('Static Article Title')
        .setHeader('Static Article Header')
        .setContent(content)
        .setFooter('Static Article Footer')
        .build();
    }
  
    createForm(title: string, fields: string): WebPage {
      return new WebPageBuilder()
        .setTitle(title)
        .setHeader('Dynamic Form Header')
        .setContent(`Form Fields: ${fields}`)
        .build();
    }
  }

  const director = new WebPageDirector();

  const articlePage = director.createArticle('This is the content of the article.');
    articlePage.displayPage();

  const formPage = director.createForm('Dynamic Form', 'Field1, Field2, Field3');
    formPage.displayPage();