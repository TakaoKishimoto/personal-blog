import searchIndex from "@content/search/index.json";
import * as JsSearch from "js-search";

class ContentIndexer {
  private static instance: ContentIndexer;

  // definite assignment assertion
  private searchEngine!: JsSearch.Search;

  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  constructor() {
    this.buildIndex();
  }

  public search(query: string) {
    const results = this.searchEngine.search(query);
    return results;
  }

  private buildIndex() {
    this.searchEngine = new JsSearch.Search("slug");
    this.searchEngine.addIndex("title");
    this.searchEngine.addIndex("description");
    this.searchEngine.addDocument(searchIndex);
  }
}

export default ContentIndexer.Instance;