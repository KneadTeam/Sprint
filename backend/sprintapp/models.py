from django.db import models
import uuid

# Create your models here.
class UserStory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    points = models.IntegerField(default=1)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

