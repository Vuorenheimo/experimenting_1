from django.urls import path
from .views import api_example

urlpatterns = [
    # Other URL patterns
    path('database', api_example, name='api_example'),
]
