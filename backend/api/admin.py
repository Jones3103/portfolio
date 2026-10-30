from django.contrib import admin
from .models import ContactMessage, Project, Skill, Education, Achievement

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('created_at',)
    actions = ['mark_as_read']

    @admin.action(description="Mark selected messages as read")
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order', 'featured', 'github_url')
    list_editable = ('order', 'featured')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'short_desc', 'tech_tags')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'meta', 'order')
    list_filter = ('category',)
    list_editable = ('order',)
    search_fields = ('name', 'meta')


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('degree', 'institution', 'period', 'order')
    list_editable = ('order',)


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'category', 'verified', 'order')
    list_editable = ('verified', 'order')
