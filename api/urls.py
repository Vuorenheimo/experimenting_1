from django.urls import path
from .views import get_data

urlpatterns = [
    # Other URL patterns
    path('api/get-data/', get_data, name='get_data'),
]
