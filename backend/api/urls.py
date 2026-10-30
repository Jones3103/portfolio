from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.contact_submit, name='api_contact'),
    path('messages/', views.get_messages, name='api_messages'),
    path('portfolio-data/', views.portfolio_data, name='api_portfolio_data'),
    path('health/', views.health_check, name='api_health'),
]

