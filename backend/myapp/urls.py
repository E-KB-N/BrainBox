from django.urls import path
from .views import career_recommended

app_name = "myapp"
urlpatterns = [
    path('',career_recommended, name = "career_recommended"),
]
