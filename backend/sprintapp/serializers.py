from rest_framework import serializers
from .models import UserStory

class UserStorySerializer(serializers.ModelSerializer):
    """Serialize a user story.
    """
    class Meta:
        model = UserStory
        fields = ['id', 'name', 'points', 'completed']

    def create(self, validated_data):
        """
        Create and return a new `UserStory` instance, given the validated data
        """
        return UserStory.object.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `UserStory` instance, given the validated data
        """
        instance.id = validated_data.get('id', instance.id)
        instance.name = validated_data.get('name', instance.name)
        instance.points = validated_data.get('points', instance.points)
        instance.completed = validated_data.get('completed', instance.completed)
        instance.save()
        return instance
