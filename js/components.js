 Vue.component('tb-articles', {
     template: '<div id="ctl00_cphBody_PostList1_posts" class="posts">\
                        <article class="post" v-for="(article,index) in articles">\
                            <header class="post-header">\
                                <h2 class="post-title">\
                                    <a :href="article.href">{{index + "." + article.title}}</a>\
                                </h2>\
                            </header>\
                            <section class="post-body text">\
                                <p>{{article.summary}}</p>\
                                <p>... <a class="more" :href="article.href">繼續閱讀</a> ...</p>\
                            </section>\
                        </article>\
                        </div>',
     props: {
         articles: Array
     }
 });