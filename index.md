---
layout: default
title: Actividades Musicales
subtitle: 88 Teclas de Aprendizaje
---

<div class="header-content">
    <h1>{{ page.title }}</h1>
    <p class="subtitle">{{ page.subtitle }}</p>
</div>

<div class="activity-grid">
    {% for activity in site.activities %}
    <a href="{{ activity.url | relative_url }}" class="activity-card">
        <div class="card-icon">🎹</div>
        <h2>{{ activity.title }}</h2>
        <p>{{ activity.description }}</p>
    </a>
    {% endfor %}
</div>
