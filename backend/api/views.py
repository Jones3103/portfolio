import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import ContactMessage, Project, Skill, Education, Achievement

@csrf_exempt
@require_http_methods(["POST", "OPTIONS"])
def contact_submit(request):
    """Handles POST submissions from the portfolio contact form."""
    if request.method == "OPTIONS":
        return JsonResponse({"status": "ok"})

    try:
        data = json.loads(request.body.decode('utf-8'))
    except (ValueError, TypeError, UnicodeDecodeError):
        # Fallback to standard POST form encoded
        data = request.POST

    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    subject = data.get('subject', 'Portfolio Inquiry').strip() or 'Portfolio Inquiry'
    message = data.get('message', '').strip()

    if not name or not email or not message:
        return JsonResponse({
            'status': 'error',
            'errors': {
                'name': 'Name is required' if not name else None,
                'email': 'Email is required' if not email else None,
                'message': 'Message is required' if not message else None
            }
        }, status=400)

    # Basic email format check
    if '@' not in email or '.' not in email.split('@')[-1]:
        return JsonResponse({
            'status': 'error',
            'errors': {'email': 'Please enter a valid email address.'}
        }, status=400)

    # Save to database
    msg = ContactMessage.objects.create(
        name=name,
        email=email,
        subject=subject,
        message=message
    )

    return JsonResponse({
        'status': 'success',
        'message': f'Thank you, {name}! Your message has been received.',
        'data': {
            'id': msg.id,
            'name': msg.name,
            'email': msg.email,
            'created_at': msg.created_at.isoformat()
        }
    }, status=201)


@require_http_methods(["GET"])
def get_messages(request):
    """Returns list of received contact messages."""
    messages = list(ContactMessage.objects.values(
        'id', 'name', 'email', 'subject', 'message', 'created_at', 'is_read'
    )[:50])
    return JsonResponse({'status': 'success', 'count': len(messages), 'messages': messages})


@require_http_methods(["GET"])
def portfolio_data(request):
    """Returns complete portfolio structured content."""
    projects = list(Project.objects.filter(featured=True).values(
        'id', 'title', 'slug', 'category', 'short_desc', 'full_desc', 
        'features', 'tech_tags', 'image_url', 'github_url', 'live_demo_url'
    ))

    skills = list(Skill.objects.values('id', 'category', 'name', 'meta', 'order'))
    education = list(Education.objects.values('id', 'degree', 'institution', 'period', 'grade', 'description', 'tags'))
    achievements = list(Achievement.objects.values('id', 'title', 'subtitle', 'category', 'description', 'verified'))

    # Group skills by category
    categorized_skills = {}
    for sk in skills:
        cat = sk['category']
        if cat not in categorized_skills:
            categorized_skills[cat] = []
        categorized_skills[cat].append({'name': sk['name'], 'meta': sk['meta']})

    return JsonResponse({
        'status': 'success',
        'profile': {
            'name': 'Jones Malaravan A',
            'role': 'Mechanical Engineering Undergraduate',
            'college': 'Indra Ganesan College of Engineering',
            'batch': '2025-2029',
            'email': 'jonesmalaravan31@gmail.com',
            'phone': '8015910534',
            'linkedin': 'https://www.linkedin.com/in/jones-malaravan-a-387161448',
            'github': 'https://github.com/jones3103',
            'tagline': 'Building practical projects that connect hardware, software, and intelligent systems.'
        },
        'stats': {
            'projects': Project.objects.count() or 3,
            'languages': 3,
            'embedded_platforms': 2
        },
        'projects': projects,
        'skills': categorized_skills,
        'education': education,
        'achievements': achievements
    })


@require_http_methods(["GET"])
def health_check(request):
    return JsonResponse({'status': 'healthy', 'service': 'Jones Malaravan Portfolio API', 'version': '1.0.0'})
