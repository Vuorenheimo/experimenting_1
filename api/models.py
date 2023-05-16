from django.db import models

# Create your models here.
class Generator(models.Model):
    password = models.CharField(max_length=25, unique=True)

    def __str__(self):
        return self.password