from django.urls import path
from . import views

urlpatterns = [
    path('api/testimonial/', views.TestimonialListCreate.as_view()),
]