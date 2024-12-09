---
title: Posts
---

Here's a collection of goings-on and important happenings in my life, sorted in reverse-chronological
order.

<hr />

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %} 
{% for year in postsByYear %}
<h3>
  <a class="not-a-link" data-toggle="collapse" href="#collapse-{{year.name}}">{{ year.name }}</a>
</h3>
{% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
{% for month in postsByMonth %}
{% assign today_date = 'now' | date: '%Y' %}
{% if year.name == today_date %}
<div id="collapse-{{year.name}}" class="panel-collapse collapse show">
{% else %}
<div id="collapse-{{year.name}}" class="panel-collapse collapse">
{% endif %}
  <ul class="list-group post-list-group">
    <li class="list-group-item post-list-group-item">
      <a class="not-a-link" data-toggle="collapse" href="#collapse-{{year.name}}-{{month.name}}">{{ month.name }}</a>
      {% if forloop.index == 1 and year.name == today_date %}
      <div id="collapse-{{year.name}}-{{month.name}}" class="panel-collapse collapse show">
      {% else %}
      <div id="collapse-{{year.name}}-{{month.name}}" class="panel-collapse collapse">
      {% endif %}
        <ul class="list-group post-list-group">
          {% for post in month.items %}
          <li class="list-group-item post-list-group-item">
            <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
          </li>
          {% endfor %}
        </ul>
      </div>
    </li>
  </ul>
</div>
{% endfor %}
{% endfor %}
