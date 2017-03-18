QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Arcticle', function(assert) {
    //TODO: write a test for the Article constructor
    var options = {author: 'author', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'}
    var iArticle = new Article(options);

    assert.ok(iArticle, 'article constructor works');
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    //TODO: verify that an instance of article has a toHtml method
    var options = {author: 'author', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'}
    var iArticle = new Article(options);
    assert.strictEqual(typeof iArticle.toHtml, 'function', 'is a valid method');
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.all should be an array', function(assert) {
    //TODO: write a test for the all articles property

    assert.ok(Array.isArray(Article.all));
  });
  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    var dummyObjArray = [
      {author: 'Jade', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'},
      {author: 'Martin', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'},
      {author: 'Ivy', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'}
    ]

    Article.loadAll(dummyObjArray);
    assert.strictEqual(typeof Article.all[0], 'object');

    delete Article.all;
  });
  QUnit.test('Article.allAuthors should get unique author names', function(assert) {
    //TODO: write a test for Article.allAuthors

    var dummyObjArray = [
      {author: 'Jade', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'},
      {author: 'Martin', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'},
      {author: 'Ivy', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'},
      {author: 'Ivy', authorUrl: 'authorUrl', body: 'body', category: 'category', publishedOn: 'publishedOn', title: 'title'}
    ]

    Article.all = dummyObjArray;
    var allAuthors = Article.allAuthors();

    var filtered = allAuthors.filter(function(article, i, array) {
      return array.indexOf(article) === i;
    });

    assert.deepEqual(allAuthors, filtered, 'equivalent');
    delete Article.all;
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
})
