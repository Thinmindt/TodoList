from django.shortcuts import render
from todo_list.models import Project, Task
from todo_list.serializers import ProjectSerializer, TaskSerializer
from rest_framework import viewsets

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer