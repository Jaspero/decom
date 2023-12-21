<script lang="ts">
	export let data: { 
		blog: {
			articles: any[];
			categories: any[];
			authors: any[];
		}
	 };
</script>

<h3>Blog</h3>

<h4>Articles</h4>

<ul>
	{#each data.blog.articles as article}
		<li><a href="/blog/{article.category}/{article.id}">{article.title}</a></li>
	{/each}
</ul>