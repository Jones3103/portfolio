from django.db import models

class ContactMessage(models.Model):
    """Stores inbound messages submitted via the portfolio contact form."""
    name = models.CharField(max_length=150)
    email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True, default='Portfolio Inquiry')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'

    def __str__(self):
        return f"{self.name} <{self.email}> - {self.subject} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"


class Project(models.Model):
    """Portfolio projects showcase."""
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=120)
    short_desc = models.TextField()
    full_desc = models.TextField(blank=True)
    features = models.JSONField(default=list, help_text="List of feature bullet points")
    tech_tags = models.JSONField(default=list, help_text="List of technology tags")
    image_url = models.CharField(max_length=300, default='assets/images/projects/smart-ev-cart.svg')
    github_url = models.URLField(default='https://github.com/jones3103')
    live_demo_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    featured = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title


class Skill(models.Model):
    """Skills categorized into Programming, Embedded/Robotics, AI Tools, Interests."""
    CATEGORY_CHOICES = [
        ('Programming', 'Programming Languages'),
        ('Embedded & Robotics', 'Embedded Systems & Robotics'),
        ('AI Development Tools', 'AI Development Tools'),
        ('Interests', 'Areas of Interest'),
    ]

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    name = models.CharField(max_length=100)
    meta = models.CharField(max_length=120, help_text="Sub-label or focus area")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['category', 'order', 'id']

    def __str__(self):
        return f"[{self.category}] {self.name} ({self.meta})"


class Education(models.Model):
    """Academic institutions and degrees."""
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    grade = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    tags = models.JSONField(default=list)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']
        verbose_name_plural = 'Education'

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Achievement(models.Model):
    """Certificates, recognitions and awards."""
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=150)
    category = models.CharField(max_length=100)
    description = models.TextField()
    verified = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.title} - {self.subtitle}"
