from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('certificates/', views.certificates_view, name='certificates')
]