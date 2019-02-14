from django.db import models

class Testimonial(models.Model):
    customer = models.CharField(max_length=100)
    experience = models.TextField()
    created_at = models.DateField(auto_now_add=True)