from django.shortcuts import render
from .serializer import TestimonialSerializer
from rest_framework import generics
from .models import *

class TestimonialListCreate(generics.ListCreateAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
