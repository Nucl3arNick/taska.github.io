from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, "appetta/index.html")

def greet(request, name):
    return render(request, "appetta/greet.html", {
        "name": name.capitalize()
    })
