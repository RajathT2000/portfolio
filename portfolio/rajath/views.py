from django.shortcuts import render
from .models import Home, About, Profile, Category, Skills, Portfolio, Certificates


def index(request):

    # Home
    home = Home.objects.latest('updated')

    # About
    abouts = About.objects.latest('updated')
    profiles = Profile.objects.filter(about=abouts)

    # Skills
    categories = Category.objects.all()

    # Portfolio
    portfolios = Portfolio.objects.all()

    context = {
        'home': home,
        'about': abouts,
        'profiles': profiles,
        'categories': categories,
        'portfolios': portfolios,
    }
    print(context)

    return render(request, 'index.html', context)


def certificates_view(request):

    portfolios = Portfolio.objects.get(name='Certificates')
    certificates = Certificates.objects.all()
    context = {
        "portfolio": portfolios,
        'certificates': certificates,
    }
    print("Context")
    print(context)

    return render(request, "certificates.html", context)


